import React, { useRef, useEffect, useCallback, useState } from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import chunk from 'lodash.chunk';
import sc from 'lodash.startcase';
import kebabcase from 'lodash.kebabcase';

import TextInput from '../TextInput';
import Select from '../Select';
import TextArea from '../TextArea';
import Accordion from '../Accordion';
import CheckBoxGroup from '../CheckBoxGroup';
import ButtonGroup from '../ButtonGroup';
import RadioButton from '../RadioButton';

import FileUploader from '../FileUploader';
import OfferTypeWidget from '../OfferTypeWidget';
import ServiceTypeWidget from '../ServiceTypeWidget';
import CheckBoxWidget from '../CheckBoxWidget';

import Tabs from '../Tabs';
import MiniForm from '../MiniForm';
import Button from '../Button';
import { Heading } from '../Text';
import { Col, Row } from '../Layout';
import MultiFieldRender from '../MultiFieldRender';
import { FormContainer, StyledForm } from './styles';
import SchedulePicker from '../SchedulePicker';
import useFormErrors from '../../hooks/useFormErrors';

import DISTRICT_PARISHES from '../utils/districts.json';

const districtOptions = Object.values(DISTRICT_PARISHES).map(district => ({
  value: district.value,
  label: district.label
}));

const getParishesOptions = districtValue => {
  const district = Object.values(DISTRICT_PARISHES).find(
    district => district.value === districtValue
  );
  return (
    district?.parishes?.map(parish => ({
      label: parish,
      value: parish
    })) ?? []
  );
};

const Form = ({
  onSubmit,
  isDisabled,
  questions,
  submitLabel,
  backgroundColor,
  translate,
  onChange,
  onError,
  errors,
  btnType,
  btnAction,
  answers = {},
  hiddenFields,
  children,
  fieldsWidgets,
  resetLabel,
  cancelLabel
}) => {
  /* const validationErrors = errors || {}; */

  const initialValues = useRef({});
  const flatFields = useRef([]);
  const [formErrors, setFormErrors] = useState({});
  useEffect(() => {
    if (errors && Object.keys(errors).length) {
      formRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start'
      });
    }
  }, [errors]);
  const getInitialValues = valueQuestions => {
    const getAnswers = qs =>
      qs.forEach((q, parent) => {
        const typeDefault =
          (q.type === 'array' || q.type === 'uniq-array') &&
          !q.widget === 'schedule-picker'
            ? []
            : undefined;
        if (q.key) {
          if (q.type === 'object') {
            getAnswers(q.questions);
          } else {
            if (initialValues.current) {
              initialValues.current[q.key] =
                answers?.[q.key] ?? (q.value || typeDefault);
            }
          }
          if (q.children) {
            getAnswers(q.children);
          }
        }
      });
    getAnswers(valueQuestions);
    // * For non-schema properties like 'offer-type' and 'district' children
    if (answers) {
      Object.keys(answers).forEach(ansKey => {
        if (!initialValues.current[ansKey]) {
          initialValues.current[ansKey] = answers[ansKey];
        }
      });
    }
  };

  getInitialValues(questions);

  const { validateField, validateAllFields } = useFormErrors({});

  const handleSubmit = useCallback(
    values => {
      const errors = validateAllFields(flatFields.current, values);
      if (!Object.keys(errors).length) {
        onSubmit(values);
      } else {
        setFormErrors(errors);
        onError(errors);
      }
    },
    [onError, onSubmit, validateAllFields]
  );

  const renderAddFields = (fields, count, formik) => {
    const addFields = [];
    for (let i = 0; i < count; i++) {
      addFields.push(
        <Row>
          {fields.map(f =>
            fieldRenderer(
              { ...f, key: f.key + i, label: f.label ? f.label + i : '\n' },
              formik
            )
          )}
        </Row>
      );
    }
    return addFields;
  };
  const fieldRenderer = useCallback(
    (field, formik, parentKey) => {
      const zipCodePlaceholder =
        field.key === 'postal-code' || field.key === 'postalCode'
          ? '0000-000'
          : undefined;

      if (
        (field.key && hiddenFields.indexOf(field.key) === -1) ||
        field.key === 'district'
      ) {
        const widget = field.widget || field.type;
        const fieldProps = {
          ...field,
          label: field.label ?? sc(field.key),
          name: field.key,
          key: field.key ?? field.label?.toLowerCase(),
          onChange: (v, f = field) => {
            const fieldError = validateField(f, v);
            setFormErrors({ ...formErrors, [f.key]: fieldError });
            formik.setFieldValue(f.key, v);
            if (onChange) {
              onChange(f.key, v);
            }
          },
          value: formik.values[field.key] ?? initialValues.current[field.key],
          placeholder: zipCodePlaceholder,
          error: formErrors[field.key],
          translate,
          type: field.type
        };

        flatFields.current.push(fieldProps);
        //validateField(field, fieldProps.value, formik);
        const isOther =
          ((typeof fieldProps.value === 'string' ||
            fieldProps.value instanceof String) &&
            (fieldProps.value ?? '')?.toLowerCase() === 'outro') ||
          false;
        const getOptVal = opt =>
          fieldProps?.value?.find(v => v.value === opt.value);
        switch (widget) {
          case 'object':
            return (
              <Accordion
                key={'accordion-' + (field.key || parentKey)}
                isOpen={field.isOpen}
                title={field.label}
                content={renderFields(formik, field.questions, true)}
              />
            );
          case 'file-uploader':
            return (
              <FileUploader
                key={'file-' + (field.key || parentKey)}
                name={field?.key}
                title={field?.label}
                answers={answers?.['files']}
                action={values => {
                  fieldProps.onChange(values, { key: 'files' });
                }}
                error={fieldProps?.error}
              />
            );
          case 'offer-type':
            return (
              <OfferTypeWidget
                key={'otw-' + (field.key || parentKey)}
                offerType={field.formOfferType}
                packOptions={field.options}
                answers={answers}
                errors={formErrors}
                values={formik?.values}
                urgentPrices={field?.urgentPrices}
                action={values => {
                  fieldProps.onChange(values.value, { key: values.name });
                }}
              />
            );
          case 'schedule-picker':
            return (
              <SchedulePicker
                name={field.key}
                key={field.key}
                value={fieldProps.value}
                t={translate}
                action={values => {
                  fieldProps.onChange(values, field);
                }}
              />
            );
          case 'mini-form':
            return (
              <MiniForm
                key={'miniform-' + field.label}
                onRemove={() => {
                  if (field.dependencyValue && parentKey) {
                    fieldProps.onChange(
                      formik.values[parentKey].filter(
                        v => v !== field.dependencyValue
                      ),
                      { key: parentKey }
                    );
                  }
                }}
                content={renderFields(formik, field.questions, true)}
                title={field.label}
                onSubmit={formik.handleSubmit}
              />
            );
          case 'text':
          case 'password':
          case 'mini-text':
            return (
              <TextInput
                key={field.key}
                {...fieldProps}
                isMini={Boolean(widget === 'mini-text')}
              />
            );
          case 'text-area':
            return <TextArea key={field.label} {...fieldProps} />;
          case 'login':
          case 'tabs':
            return (
              <Tabs
                key={field.key}
                type={field.type}
                /* tabs={field.options.map(opt => ({
                name: opt.label,
                value: opt.value
              }))}
              initialTabIndex={field.options
                .map(d => d.value)
                .indexOf(formik.values[field.key])} */
                //! temporay login / signup removal
                tabs={[
                  {
                    name: field.options[0]?.label,
                    value: field.options[0]?.value
                  }
                ]}
                initialTabIndex={0}
                action={v => {
                  fieldProps.onChange(field.options[v].value, field);
                }}
              />
            );
          case 'radio':
            return (
              <RadioButton
                key={field.key}
                error={fieldProps.error}
                name={field.key}
                isVerticalAligned={field.isVerticalAligned}
                action={option => {
                  fieldProps.onChange(option.value, field);
                }}
                list={field.options}
                {...fieldProps}
              />
            );
          case 'footnote':
            return (
              <Heading
                style={{ marginTop: '35px', marginBottom: 0 }}
                size={6}
                key={'footnote' + field.key}
              >
                {field.label}
              </Heading>
            );
          case 'mini-dropdown':
          case 'dropdown':
            return (
              <Select
                isMulti={field.isMulti}
                isMini={Boolean(widget === 'mini-dropdown')}
                options={field.options}
                {...fieldProps}
                defaultValue={
                  !field?.isMulti
                    ? field.options?.find(
                        opt => opt.value === answers?.[field.key]
                      )
                    : answers?.[field.key]?.map(opt => {
                        const defaults = field.options?.find(el => {
                          return el.value === opt;
                        });
                        return defaults;
                      })
                }
                onChange={option => {
                  fieldProps.onChange(
                    !field?.isMulti
                      ? option?.value ?? ''
                      : option?.map(e => e.value) ?? [],
                    field
                  );
                }}
              />
            );
          case 'service-type-detail':
            return (
              <React.Fragment key={'service-widget'}>
                <ServiceTypeWidget
                  heading={field?.heading}
                  headerText={field?.headerText}
                  body={field.body}
                  extras={field.extras}
                />
              </React.Fragment>
            );
          case 'district':
            return (
              <React.Fragment key={'district'}>
                {hiddenFields.indexOf('district') === -1 ? (
                  <Select
                    options={districtOptions}
                    label={field?.label || 'Concelho'}
                    error={fieldProps.error}
                    defaultValue={districtOptions?.find(
                      opt =>
                        opt.value === fieldProps.value ||
                        kebabcase(opt.label) === kebabcase(fieldProps.value)
                    )}
                    onChange={option => {
                      fieldProps.onChange(kebabcase(option.value), field);
                    }}
                  />
                ) : (
                  <></>
                )}
                {(formik.values[field.key] &&
                isOther &&
                hiddenFields.indexOf('district') === -1 ? (
                  <React.Fragment key={'district_other'}>
                    <TextInput
                      key={'district_other'}
                      label='Distrito'
                      error={formErrors['district_other']}
                      onChange={v => {
                        fieldProps.onChange(v, { key: 'district_other' });
                      }}
                      name='district_other'
                      value={formik.values[field.key + '_other']}
                    />
                    <TextInput
                      key={'district_other_parish'}
                      label='Freguesia'
                      error={formErrors['district_other_parish']}
                      onChange={v => {
                        fieldProps.onChange(v, {
                          key: 'district_other_parish'
                        });
                      }}
                      defaultValue={answers?.['district_other_parish']}
                      name='district_other_parish'
                      value={formik.values[field.key + 'other__parish']}
                    />
                  </React.Fragment>
                ) : (
                  hiddenFields.indexOf('district_parish') === -1 && (
                    <Select
                      label='Freguesia'
                      key={`${formik.values['district']}_parishes`}
                      error={formErrors['district_parish']}
                      isMini={Boolean(widget === 'mini-dropdown')}
                      options={getParishesOptions(formik.values[field.key])}
                      defaultValue={getParishesOptions(
                        formik.values[field.key]
                      )?.find(
                        opt => opt.value === answers?.['district_parish']
                      )}
                      onChange={option => {
                        fieldProps.onChange(option.value, {
                          key: 'district_parish'
                        });
                      }}
                    />
                  )
                )) || <></>}
              </React.Fragment>
            );
          case 'add-field':
            return (
              <MultiFieldRender
                label={field.label}
                addAction={() => {
                  fieldProps.onChange(fieldProps.value + 1, field);
                }}
                removeAction={() => {
                  fieldProps.onChange(fieldProps.value - 1, field);
                }}
                content={renderAddFields(
                  field.fields,
                  fieldProps.value,
                  formik
                )}
              />
            );
          case 'uniq-array':
            return (
              <Select
                isMini={Boolean(widget === 'mini-dropdown')}
                options={field.options}
                defaultValue={fieldProps.value}
                {...fieldProps}
                isUniq
                onChange={v => {
                  fieldProps.onChange(
                    Array.from(new Set([...fieldProps.value, v.value])),
                    field
                  );
                }}
                onRemove={v =>
                  fieldProps.onChange(
                    fieldProps.value.filter(opt => opt !== v),
                    field
                  )
                }
              />
            );
          case 'checkbox-widget':
            return (
              <CheckBoxWidget
                {...fieldProps}
                name={fieldProps.key}
                key={fieldProps.key}
                label={fieldProps?.label}
                list={field?.options.map(opt => ({
                  value: opt.value,
                  question: opt.label,
                  isSelectable: opt.isSelectable,
                  isSelected: getOptVal(opt)
                    ? getOptVal(opt).isSelected || false
                    : opt.isSelected
                }))}
                defaultValues={formik?.values[fieldProps.key]}
                action={values => {
                  fieldProps.onChange(values, field);
                }}
                content={field.optionalContent}
              />
            );
          case 'checkbox-group':
            return (
              <CheckBoxGroup
                {...fieldProps}
                name={fieldProps.key}
                key={fieldProps.key}
                label={fieldProps?.label}
                list={field?.options.map(opt => ({
                  value: opt.value,
                  question: opt.label,
                  isSelected: getOptVal(opt)
                    ? getOptVal(opt).isSelected || false
                    : opt.isSelected
                }))}
                action={values => {
                  fieldProps.onChange(values, field);
                }}
              />
            );
          case 'button-group':
            return (
              <ButtonGroup
                name={fieldProps.key}
                label={fieldProps?.label}
                list={field?.options}
                value={formik?.values[field.key]}
                action={values => {
                  fieldProps.onChange(values.value, field);
                }}
                {...fieldProps}
              />
            );
          default:
            return <TextInput key={field.label} {...fieldProps} />;
        }
      }
      switch (field?.type) {
        case 'footnote':
          return (
            <Heading size={6} style={{ marginTop: '35px', marginBottom: 0 }}>
              {field.label}
            </Heading>
          );
        default:
          return <></>;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [formErrors]
  );

  const renderFields = (formik, fields, skipReset) => {
    if (!skipReset) {
      flatFields.current.length = 0;
    }
    const formFields = [];
    const columns = [];
    const columnsRenderer = (key = 'last-parent', groupBy = 2) => {
      formFields.push(
        chunk(columns, groupBy).map((col, i) => (
          <Row
            key={`${key}-children-cols-${i}`}
            align='center'
            inlineStyle={`
              ${col.length === 1 &&
                `
                > div > div {
                width: 100%;
              `}
            `}
          >
            {col}
          </Row>
        ))
      );
    };

    const fieldsRenderer = (fieldQuestions, parent) =>
      fieldQuestions.forEach((q, i) => {
        const children = q.children;
        const { dependencyType, dependencyValue } = q;
        const parentKey = parent?.key;
        // * ie is children
        if (dependencyType) {
          const parentValue = formik.values[parentKey]?.value
            ? formik.values[parentKey].value
            : formik.values[parentKey];
          switch (dependencyType) {
            case 'value':
              if (
                parentValue === dependencyValue ||
                (Array.isArray(parentValue) &&
                  parentValue?.find(val => val.value === dependencyValue)
                    ?.isSelected)
              ) {
                columns.push(
                  q.excludeFromGroup ? (
                    <Row key={'columns' + i} padding={0}>
                      {fieldRenderer(q, formik)}
                    </Row>
                  ) : (
                    <Col size={1} key={'columns' + i} padding={0}>
                      {fieldRenderer(q, formik)}
                    </Col>
                  )
                );
              }
              break;
            case 'value-includes':
              if (parentValue?.includes(dependencyValue)) {
                formFields.push(fieldRenderer(q, formik, parentKey));
              }
              break;
            case 'value-count':
              for (let i = 0; i < Number(parentValue); i++) {
                columns.push(
                  <Col size={1} padding={0}>
                    {fieldRenderer(
                      {
                        ...q,
                        key: `${q.key}-${i + 1}`,
                        label: `${q.label} ${i + 1}`
                      },
                      formik
                    )}
                  </Col>
                );
              }
              break;
            default:
              break;
          }
        } else {
          // * if there any children from the previous non dependant field.
          if (columns.length) {
            // * push children to form and reset array
            columnsRenderer(parentKey);
            columns.length = 0;
          }
          formFields.push(
            fieldRenderer({ ...q, key: q.key || `question-${i}` }, formik)
          );
        }
        if (children) {
          fieldsRenderer(children, q);
        }
      });
    fieldsRenderer(fields);
    if (columns.length) {
      const lastField = fields[fields.length - 1];
      columnsRenderer(lastField.key, lastField.groupBy);
      columns.length = 0;
    }
    return formFields;
  };

  const formRef = useRef();
  return (
    <FormContainer ref={formRef} bg={backgroundColor}>
      {children}
      <Formik
        initialValues={initialValues.current}
        onSubmit={f => handleSubmit(f)}
      >
        {formik => {
          return (
            <StyledForm onSubmit={formik.handleSubmit}>
              {renderFields(formik, questions, false)}
              <Button
                isDisabled={isDisabled}
                type={btnType}
                action={() => btnType !== 'submit' && btnAction(formik.values)}
                btnType={'primary'}
                isFullWidth
                text={submitLabel}
              />
            </StyledForm>
          );
        }}
      </Formik>
    </FormContainer>
  );
};

Form.propTypes = {
  isDisabled: PropTypes.bool,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
  errors: PropTypes.object,
  onChange: PropTypes.func,
  translate: PropTypes.func,
  submitLabel: PropTypes.string,
  resetLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  backgroundColor: PropTypes.string,
  fieldsWidgets: PropTypes.object,
  btnType: PropTypes.string,
  btnAction: PropTypes.func,
  onError: PropTypes.func,
  answers: PropTypes.object,
  hiddenFields: PropTypes.arrayOf(PropTypes.string),
  questions: PropTypes.arrayOf(
    // * Fields
    PropTypes.shape({
      type: PropTypes.oneOf([
        'dropdown',
        'form',
        'text',
        'date',
        'radio',
        'form',
        'object',
        'footnote',
        'array',
        'text-area',
        'tabs'
      ]),
      key: PropTypes.string,
      // ! To be replaced with label/translate on key 👇
      question: PropTypes.string,
      widget: PropTypes.string,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string,
          value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        })
      ),
      // * Dependent Fields 👇
      children: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string,
          widget: PropTypes.string,
          dependencyType: PropTypes.oneOf([
            'value',
            'value-count',
            'value-includes'
          ]),
          // * Dependency Logic 👇
          // - value: Watches the value of the parent, only rendering when dependencyValue matches
          // - value-count: will render as many children as the current value count
          dependencyValue: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
          ]),
          key: PropTypes.string,
          options: PropTypes.arrayOf(
            PropTypes.shape({
              label: PropTypes.string,
              value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            })
          )
        })
      )
    })
  )
};

Form.defaultProps = {
  onSubmit: values =>
    console.log('🚀 ~~ SUCCESS ~~ Submitting form values', values),
  onError: errors => console.log('🔴 ~~ERRORS IN FORM ~~', errors),
  onChange: values =>
    console.log('Changing form values, set onChange prop to override', values),
  submitLabel: 'Submit',
  resetLabel: '',
  btnType: 'submit',
  cancelLabel: '',
  backgroundColor: 'primary',
  hiddenFields: [],
  answers: {},
  questions: []
};

export default Form;

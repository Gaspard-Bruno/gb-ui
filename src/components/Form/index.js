import React, { useRef, useEffect, useCallback, useState } from 'react';
import { Formik, useFormik } from 'formik';
import PropTypes from 'prop-types';
import chunk from 'lodash.chunk';
import sc from 'lodash.startcase';
import kebabcase from 'lodash.kebabcase';
import snakecase from 'lodash.snakecase';

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
import useFormErrors from 'hooks/useFormErrors/useFormErrors';

import DISTRICT_PARISHES from './DISTRICT_PARISHES';

const districtOptions = Object.keys(DISTRICT_PARISHES).map(district => ({
  value: snakecase(district),
  label: district
}));

const getParishesOptions = parishValue => {
  return (
    DISTRICT_PARISHES[sc(parishValue)]?.map(parish => ({
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
  fieldsWidgets,
  onChange,
  resetLabel,
  cancelLabel,
  errors,
  btnType,
  btnAction,
  answers,
  hiddenFields,
  children
}) => {
  /* const validationErrors = errors || {}; */

  const [formState, setFormState] = useState({
    answers: answers || {},
    errors: errors || {}
  });

  /*  useEffect(() => {
    if (formState.errors) {
      formRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start'
      });
    }
  }, [formErrors, formState]); */
  const { formErrors, handledFields } = useFormErrors({
    values: formState.answers,
    questions: questions
  });

  const handleSubmit = useCallback(
    values => {
      setFormState({
        ...formState,
        answers: { ...values }
      });
      console.log('🚀 ~ file: index.js ~ line 95 ~ formErrors', values);
      if (Object.keys(formErrors).length) {
        formRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'start'
        });
        return setFormState({
          ...formState,
          errors: formErrors
        });
      }
      onSubmit(values);
    },
    [formErrors, formState, onSubmit]
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
  const fieldRenderer = (field, formik, parentKey) => {
    const zipCodePlaceholder =
      field.key === 'postal-code' || field.key === 'postalCode'
        ? '0000-000'
        : undefined;

    //! Formik inputs logic
    if (
      (field.key && hiddenFields.indexOf(field.key) === -1) ||
      field.key === 'district'
    ) {
      const widget = field.widget || field.type;
      const fieldProps = {
        label: field.label ?? sc(field.key),
        name: field.key,
        key: field.key ?? field.label?.toLowerCase(),
        onChange: v => {
          formik.setFieldValue(field.key, v);
          handledFields(field.key, v);
        },
        value: formik.values[field.key] ?? initialValues[field.key],
        placeholder: zipCodePlaceholder,
        translate,
        type: field.type,
        error: formErrors?.[field.key] // required, hasBeenTaken,
      };
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
              content={renderFields(formik, field.questions, field.parentKey)}
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
                handledFields(field?.key, values);
                formik.setFieldValue(field?.key, values);
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
              values={formik?.values}
              errors={formErrors}
              urgentPrices={field?.urgentPrices}
              action={values => {
                handledFields(values.name, values.value);
                formik.setFieldValue(values.name, values.value);
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
                handledFields(field?.key, values);
                formik.setFieldValue(field?.key, values);
              }}
            />
          );
        case 'mini-form':
          return (
            <MiniForm
              key={'miniform-' + field.label}
              onRemove={() => {
                handledFields(
                  parentKey,
                  formik.values[parentKey].filter(
                    v => v !== field.dependencyValue
                  )
                );
                return (
                  field.dependencyValue &&
                  parentKey &&
                  formik.setFieldValue(
                    parentKey,
                    formik.values[parentKey].filter(
                      v => v !== field.dependencyValue
                    )
                  )
                );
              }}
              content={renderFields(formik, field.questions)}
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
                handledFields(field.key, field.options[v].value);
                formik.setFieldValue(field.key, field.options[v].value);
              }}
            />
          );
        case 'radio':
          return (
            <RadioButton
              key={field.key}
              error={field.error}
              name={field.key}
              isVerticalAligned={field.isVerticalAligned}
              action={option => {
                handledFields(field.key, option.value);
                formik.setFieldValue(option.name, option.value);
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
                handledFields(
                  field.key,
                  !field?.isMulti
                    ? option?.value ?? ''
                    : option?.map(e => e.value) ?? []
                );
                return formik.setFieldValue(
                  field.key,
                  !field?.isMulti
                    ? option?.value ?? ''
                    : option?.map(e => e.value) ?? []
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
                    handledFields(field.key, kebabcase(option.value));
                    formik.setFieldValue(field.key, kebabcase(option.value));
                  }}
                />
              ) : (
                <></>
              )}
              {(formik.values[field.key] && isOther ? (
                <React.Fragment key={'district_other'}>
                  <TextInput
                    key={'district_other'}
                    label='Distrito'
                    error={fieldProps.error}
                    onChange={v => {
                      handledFields(field.key + '_other', v);
                      formik.setFieldValue(field.key + '_other', v);
                    }}
                    name='district_other'
                    value={formik.values[field.key + '_other']}
                  />
                  <TextInput
                    key={'district_other_parish'}
                    label='Freguesia'
                    error={fieldProps.error}
                    onChange={v => {
                      handledFields(field.key + '_parish', v);
                      formik.setFieldValue(field.key + '_parish', v);
                    }}
                    defaultValue={answers?.['district_other_parish']}
                    name='district_other_parish'
                    value={formik.values[field.key + '_parish']}
                  />
                </React.Fragment>
              ) : (
                <Select
                  label='Freguesia'
                  key={`${formik.values['district']}_parishes`}
                  error={fieldProps.error}
                  isMini={Boolean(widget === 'mini-dropdown')}
                  options={getParishesOptions(formik.values[field.key])}
                  defaultValue={getParishesOptions(
                    formik.values[field.key]
                  )?.find(opt => opt.value === answers?.['parish'])}
                  onChange={option => {
                    handledFields('parish', option.value);
                    formik.setFieldValue('parish', option.value);
                  }}
                />
              )) || <></>}
            </React.Fragment>
          );
        case 'add-field':
          return (
            <MultiFieldRender
              label={field.label}
              addAction={() => {
                handledFields(field.key, fieldProps.value + 1);
                formik.setFieldValue(field.key, fieldProps.value + 1);
              }}
              removeAction={() => {
                handledFields(field.key, fieldProps.value - 1);
                formik.setFieldValue(field.key, fieldProps.value - 1);
              }}
              content={renderAddFields(field.fields, fieldProps.value, formik)}
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
                handledFields(
                  field.key,
                  Array.from(new Set([...fieldProps.value, v.value]))
                );
                formik.setFieldValue(
                  field.key,
                  Array.from(new Set([...fieldProps.value, v.value]))
                );
              }}
              onRemove={v =>
                formik.setFieldValue(
                  field.key,
                  fieldProps.value.filter(opt => opt !== v)
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
                handledFields(field.key, values);
                formik.setFieldValue(field.key, values);
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
                handledFields(field.key, values);
                formik.setFieldValue(field.key, values);
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
                handledFields(field.key, values.value);
                formik.setFieldValue(field.key, values.value);
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
  };

  const renderFields = (formik, fields) => {
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

  const initialValues = {};
  const getInitialValues = valueQuestions =>
    valueQuestions.forEach(q => {
      const typeDefault =
        (q.type === 'array' || q.type === 'uniq-array') &&
        !q.widget === 'schedule-picker'
          ? []
          : undefined;
      if (q.key) {
        if (q.type === 'object') {
          getInitialValues(q.questions);
        } else {
          initialValues[q.key] = answers?.[q.key] ?? (q.value || typeDefault);
        }
        if (q.children) {
          getInitialValues(q.children);
        }
      }
    });
  getInitialValues(questions);

  const formRef = useRef();

  return (
    <FormContainer ref={formRef} bg={backgroundColor}>
      {children}
      <Formik initialValues={initialValues} onSubmit={f => handleSubmit(f)}>
        {formik => (
          <StyledForm onSubmit={formik.handleSubmit}>
            {renderFields(formik, questions)}
            <Button
              isDisabled={isDisabled}
              type={btnType}
              action={() => btnType !== 'submit' && btnAction(formik.values)}
              btnType={'primary'}
              isFullWidth
              text={submitLabel}
            />
          </StyledForm>
        )}
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
  onSubmit: values => console.log('Submitting form values', values),
  onChange: values => console.log('Changing form values', values),
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

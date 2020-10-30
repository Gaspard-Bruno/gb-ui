import React, { useRef, useEffect } from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import chunk from 'lodash.chunk';
import sc from 'lodash.startcase';

import TextInput from '../TextInput';
import Select from '../Select';
import TextArea from '../TextArea';
import Accordion from '../Accordion';
import CheckBoxGroup from '../CheckBoxGroup';
import ButtonGroup from '../ButtonGroup';
import RadioButton from '../RadioButton';
import Tabs from '../Tabs';
import MiniForm from '../MiniForm';
import Button from '../Button';
import { Body } from '../Text';
import { Col, Row } from '../Layout';
import MultiFieldRender from '../MultiFieldRender';
import { FormContainer, StyledForm } from './styles';
import SchedulePicker from '../SchedulePicker';

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
    if (field.key && hiddenFields.indexOf(field.key) === -1) {
      const widget = field.widget || field.type;
      const fieldProps = {
        label: field.label ?? sc(field.key),
        name: field.key,
        key: field.key ?? field.label?.toLowerCase(),
        onChange: v => formik.setFieldValue(field.key, v),
        value: formik.values[field.key],
        translate,
        type: field.type,
        error: errors && errors?.[field.key] && errors?.[field.key] // required, hasBeenTaken
      };
      switch (widget) {
        case 'object':
          return (
            <Accordion
              isOpen={false}
              title={field.label}
              content={renderFields(formik, field.questions, field.parentKey)}
            />
          );
        case 'schedule-picker':
          return (
            <SchedulePicker
              name={field.key}
              action={values => formik.setFieldValue(field.key, values)}
            />
          );
        case 'mini-form':
          return (
            <MiniForm
              onRemove={() =>
                field.dependencyValue &&
                parentKey &&
                formik.setFieldValue(
                  parentKey,
                  formik.values[parentKey].filter(
                    v => v !== field.dependencyValue
                  )
                )
              }
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
              tabs={field.options.map(opt => ({
                name: opt.label,
                value: opt.value
              }))}
              action={v =>
                formik.setFieldValue(field.key, field.options[v].value)
              }
              initialTabIndex={field.options
                .map(d => d.value)
                .indexOf(formik.values[field.key])}
            />
          );
        case 'radio':
          return (
            <RadioButton
              key={field.key}
              error={field.error}
              name={field.key}
              action={option => formik.setFieldValue(option.name, option.value)}
              list={field.options}
              {...fieldProps}
            />
          );
        case 'footnote':
          return <Body alt='true'>{field.label}</Body>;
        case 'mini-dropdown':
        case 'dropdown':
          return (
            <Select
              isMulti={field.isMulti}
              isMini={Boolean(widget === 'mini-dropdown')}
              options={field.options}
              {...fieldProps}
              defaultValue={field.options?.find(
                opt => opt.value === fieldProps.value
              )}
              onChange={option =>
                !field?.isMulti
                  ? formik.setFieldValue(field.key, option.value)
                  : formik.setFieldValue(
                      field.key,
                      option.map(e => e.value)
                    )
              }
            />
          );
        case 'add-field':
          return (
            <MultiFieldRender
              label={field.label}
              addAction={() => {
                formik.setFieldValue(field.key, fieldProps.value + 1);
              }}
              removeAction={() => {
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
              inputValue={fieldProps?.value?.label ?? ''}
              {...fieldProps}
              onChange={v =>
                formik.setFieldValue(
                  field.key,
                  Array.from(new Set([...fieldProps.value, v.value]))
                )
              }
            />
          );
        case 'checkbox-group':
          return (
            <CheckBoxGroup
              name={fieldProps.key}
              label={fieldProps?.label}
              list={field?.options.map(opt => ({
                value: opt.value,
                question: opt.label
              }))}
              action={values => formik.setFieldValue(field.key, values)}
            />
          );
        case 'button-group':
          return (
            <ButtonGroup
              name={fieldProps.key}
              label={fieldProps?.label}
              list={field?.options}
              action={values => formik.setFieldValue(field.key, values.value)}
              {...fieldProps}
            />
          );
        default:
          return <TextInput key={field.label} {...fieldProps} />;
      }
    }
    switch (field?.type) {
      case 'footnote':
        return <Body alt='true'>{field.label}</Body>;
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
              if (parentValue === dependencyValue) {
                columns.push(
                  <Col size={1} padding={0}>
                    {fieldRenderer(q, formik)}
                  </Col>
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
        q.type === 'array' || q.type === 'uniq-array' ? [] : undefined;
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

  const scrollToRef = ref =>
    window.scrollTo({
      behavior: 'smooth',
      top: ref.current.offsetTop - 100
    });

  useEffect(() => {
    if (errors) {
      scrollToRef(formRef);
    }
  }, [errors]);

  return (
    <FormContainer ref={formRef} bg={backgroundColor}>
      {children}
      <Formik initialValues={initialValues} onSubmit={f => onSubmit(f)}>
        {formik => (
          <>
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
          </>
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
      type: PropTypes.oneOf(
        'dropdown',
        'form',
        'text',
        'date',
        'radio',
        'footnote',
        'array',
        'text-area',
        'tabs'
      ).isRequired,
      key: PropTypes.string,
      // ! To be replaced with label/translate on key 👇
      question: PropTypes.string,
      widget: PropTypes.string,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string,
          value: PropTypes.oneOfType(PropTypes.string, PropTypes.number)
        })
      ),
      // * Dependent Fields 👇
      children: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string,
          widget: PropTypes.string,
          dependencyType: PropTypes.oneOf('value', 'value-count'),
          // * Dependency Logic 👇
          // - value: Watches the value of the parent, only rendering when dependencyValue matches
          // - value-count: will render as many children as the current value count
          dependencyValue: PropTypes.string,
          key: PropTypes.string,
          options: PropTypes.arrayOf(
            PropTypes.shape({
              label: PropTypes.string,
              value: PropTypes.oneOfType(PropTypes.string, PropTypes.number)
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

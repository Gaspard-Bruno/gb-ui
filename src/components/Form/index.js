import React, { useRef } from 'react';
import { Field, Formik } from 'formik';
import PropTypes from 'prop-types';
import chunk from 'lodash.chunk';
import sc from 'lodash.startcase';

import TextInput from 'Components/TextInput';
import Select from 'Components/Select';
import TextArea from 'Components/TextArea';
import Accordion from 'Components/Accordion';
import CheckBoxGroup from 'Components/CheckBoxGroup';
import ButtonGroup from 'Components/ButtonGroup';
import RadioButton from 'Components/RadioButton';
import Tabs from 'Components/Tabs';
import MiniForm from 'Components/MiniForm';
import Button from 'Components/Button';
import { Tiny } from 'Components/Text';
import { Col, Row } from 'Components/Layout';

import { FormContainer, StyledForm } from './styles';

const Form = ({
  onSubmit,
  questions,
  onChange,
  submitLabel,
  resetLabel,
  cancelLabel,
  backgroundColor,
  fieldsWidgets
}) => {
  const fieldRenderer = (field, formik, parentKey) => {
    if (field.key) {
      const widget = field.widget || field.type;
      const fieldProps = {
        label: field.label ?? sc(field.key),
        name: field.key,
        key: field.key ?? field.label?.toLowerCase(),
        onChange: v => formik.setFieldValue(field.key, v),
        value: formik.values[field.key],
        type: field.type
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
              onChange
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
          return <Tiny>{field.label}</Tiny>;
        case 'mini-dropdown':
        case 'dropdown':
          return (
            <Select
              isMini={Boolean(widget === 'mini-dropdown')}
              options={field.options}
              inputValue={fieldProps?.value?.label ?? ''}
              {...fieldProps}
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
            />
          );
        default:
          return <TextInput key={field.label} {...fieldProps} />;
      }
    }
    switch (field?.type) {
      case 'footnote':
        return <Tiny key={field.key}>{field.label}</Tiny>;
      default:
        return <></>;
    }
  };

  const renderFields = (formik, fields) => {
    const formFields = [];
    const columns = [];
    const columnsRenderer = (key = 'last-parent', groupBy = 2) => {
      formFields.push(
        chunk(columns, groupBy).map(col => (
          <Row
            key={`${key}-children-cols`}
            align='flex-start'
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
                        label: `${q.label}-${i + 1}`
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
          initialValues[q.key] = q.value || typeDefault;
        }
        if (q.children) {
          getInitialValues(q.children);
        }
      }
    });
  getInitialValues(questions);

  return (
    <FormContainer bg={backgroundColor}>
      <Formik
        initialValues={initialValues}
        onSubmit={f => console.log('submitting', f)}
      >
        {formik => (
          <>
            <StyledForm onSubmit={formik.handleSubmit}>
              {renderFields(formik, questions)}
              <Button type='submit' btnType={'primary'} text='Submit' />
            </StyledForm>
          </>
        )}
      </Formik>
    </FormContainer>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  submitLabel: PropTypes.string,
  resetLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  backgroundColor: PropTypes.string,
  fieldsWidgets: PropTypes.object,
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
      key: PropTypes.string.isRequired,
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
          type: PropTypes.string.isRequired,
          widget: PropTypes.string,
          dependencyType: PropTypes.oneOf('value', 'value-count'),
          // * Dependency Logic 👇
          // - value: Watches the value of the parent, only rendering when dependencyValue matches
          // - value-count: will render as many children as the current value count
          dependencyValue: PropTypes.string,
          key: PropTypes.string.isRequired,
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
  cnacelLabel: '',
  backgroundColor: 'primary',
  questions: []
};

export default Form;

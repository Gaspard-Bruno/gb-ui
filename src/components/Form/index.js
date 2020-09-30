import React, { useRef } from "react";
import { Field, Formik } from "formik";
import PropTypes from "prop-types";
import sc from "lodash.startcase";

import TextInput from "Components/TextInput";
import Select from "Components/Select";
import TextArea from "Components/TextArea";
import Button from "Components/Button";
import { Tiny } from "Components/Text";

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
  const fieldRenderer = (field, formik) => {
    if (field.key) {
      const fieldProps = {
        label: sc(field.key),
        onChange: v => formik.setFieldValue(field.key, v),
        value: formik.values[field.key],
        type: field.type
      };
      switch (field?.type) {
        case "text":
        case "password":
          return () => <TextInput key={field.label} {...fieldProps} />;
        case "text-area":
          return () => <TextArea key={field.label} {...fieldProps} />;
        case "footnote":
          return () => <Tiny>{field.question}</Tiny>;
        case "dropdown":
          return () => (
            <Select
              options={field.options}
              inputValue={fieldProps?.value?.label}
              {...fieldProps}
            />
          );
        default:
          return () => <TextInput key={field.label} {...fieldProps} />;
      }
    }
    switch (field?.type) {
      case "footnote":
        return () => <Tiny>{field.question}</Tiny>;
      default:
        return () => <></>;
    }
  };

  const renderFields = (formik, fields) => {
    const formFields = [];
    const fieldsRenderer = (fieldQuestions, parent) =>
      fieldQuestions.forEach((q, i) => {
        const children = q.children;
        const { dependencyType, dependencyValue } = q;
        if (dependencyType) {
          const parentKey = parent.key;
          const parentValue = formik.values[parentKey]?.value
            ? formik.values[parentKey].value
            : formik.values[parentKey];
          console.log("formik parent value", parentValue);
          switch (dependencyType) {
            case "value":
              if (parentValue === dependencyValue) {
                formFields.push(
                  <Field
                    as={fieldRenderer(q, formik)}
                    name={q.key}
                    key={q.key}
                  ></Field>
                );
              }
              break;
            case "value-count":
              console.log("formik value count", dependencyValue);
              for (let i = 0; i < Number(parentValue); i++) {
                console.log("formik pushing");
                formFields.push(
                  <Field
                    as={fieldRenderer(q, formik)}
                    name={`${q.key}-${i}`}
                    key={`${q.key}-${i}`}
                  ></Field>
                );
              }
            default:
              break;
          }
        } else {
          formFields.push(
            <Field
              as={fieldRenderer(q, formik)}
              name={q.key}
              key={q.key || `question-${i}`}
            ></Field>
          );
        }
        if (children) {
          fieldsRenderer(children, q);
        }
      });
    fieldsRenderer(fields);
    return formFields;
  };

  const initialValues = {};

  questions.forEach(q => {
    if (q.key) {
      initialValues[q.key] = q.value;
    }
  });

  return (
    <FormContainer bg={backgroundColor}>
      <Formik
        initialValues={initialValues}
        onSubmit={() => console.log("submitting")}
      >
        {formik =>
          !console.log("rendering formik", formik) && (
            <>
              <StyledForm onSubmit={() => console.log(formik)}>
                {renderFields(formik, questions)}
              </StyledForm>
            </>
          )
        }
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
        "dropdown",
        "form",
        "text",
        "date",
        "radio",
        "footnote",
        "text-area",
        "tabs"
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
          dependencyType: PropTypes.oneOf("value", "value-count"),
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
  onSubmit: values => console.log("Submitting form values", values),
  onChange: values => console.log("Changing form values", values),
  submitLabel: "Submit",
  resetLabel: "",
  cnacelLabel: "",
  backgroundColor: "primary",
  questions: []
};

export default Form;

import React, { useRef } from "react";
import { Field, Formik } from "formik";
import PropTypes from "prop-types";
import sc from "lodash.startcase";

import TextInput from "Components/TextInput";
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
        onChange: formik.handleChange,
        value: formik.values[field.key]
      };
      switch (field?.type) {
        case "text":
        case "password":
          return () => <TextInput key={field.label} {...fieldProps} />;
        case "text-area":
          return () => <TextArea key={field.label} {...fieldProps} />;
        case "footnote":
          return () => <Tiny>{field.question}</Tiny>;
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

  const renderFields = formik => {
    return questions.map(
      q =>
        !console.log("rendering question", q) && (
          <Field as={fieldRenderer(q, formik)} name={q.key} key={q.key}></Field>
        )
    );
  };

  const initialValues = {};

  questions.forEach(q => {
    initialValues[q.key] = q.value;
  });
  return (
    <FormContainer bg={backgroundColor}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {formik => (
          <>
            <StyledForm onSubmit={formik.handleSubmit}>
              {renderFields(formik)}
            </StyledForm>
            <Button
              fullWidth
              btnType="primary"
              type="submit"
              text={submitLabel}
            />
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

import React, { useRef } from "react";
import PropTypes from "prop-types";
import sc from "lodash.startcase";

import TextInput from '../TextInput';
import TextArea from '../TextArea';
import Button from '../Button';

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
  const formRef = useRef();

  const fieldRenderer = field => {
    if (field.key) {
      const fieldProps = {
        label: sc(field.key)
      };
      switch (field?.type) {
        case "text":
        case "password":
          return <TextInput key={field.label} {...fieldProps} />;
        case "text-area":
          return <TextArea key={field.label} {...fieldProps} />;
        default:
          return <TextInput key={field.label} {...fieldProps} />;
      }
    }
  };

  const renderFields = () => {
    return questions.map(q => fieldRenderer(q));
  };

  return (
    <FormContainer bg={backgroundColor}>
      <StyledForm ref={formRef} onSubmit={onSubmit}>
        {renderFields()}
      </StyledForm>
      <Button
        fullWidth
        onClick={onSubmit}
        btnType="primary"
        type="submit"
        text={submitLabel}
      />
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

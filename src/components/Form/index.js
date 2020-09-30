import React, { useRef } from 'react';
import PropTypes from 'prop-types';

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
  backgroundColor
}) => {
  const formRef = useRef();
  return (
    <FormContainer bg={backgroundColor}>
      <StyledForm ref={formRef} onSubmit={onSubmit}>
        {questions?.map((field, index) => {
          return renderFields(field);
        })}
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

const renderFields = (field) => {
  switch (field?.type) {
    case 'text':
    case 'password':
      return <TextInput key={field.label} {...field} />;
    case 'text-area':
      return <TextArea key={field.label} {...field} />;
    default:
      return <TextInput key={field.label} {...field} />;
  }
};

Form.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  submitLabel: PropTypes.string,
  resetLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  backgroundColor: PropTypes.string,
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

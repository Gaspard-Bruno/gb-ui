import React, { useRef } from "react";
import PropTypes from "prop-types";

import TextInput from "Components/TextInput";
import TextArea from "Components/TextArea";
import Button from "Components/Button";

import { FormContainer, StyledForm } from "./styles";

const Form = ({ onSubmit, formFields, btnLabel = "Inscrever-se" }) => {
  const formRef = useRef();
  console.log(formFields);
  return (
    <FormContainer>
      <StyledForm ref={formRef} onSubmit={onSubmit}>
        {formFields &&
          formFields.map((field, index) => {
            return renderFields(field);
          })}
        <Button type="submit" text={btnLabel} />
      </StyledForm>
    </FormContainer>
  );
};

const renderFields = ({ field }) => {
  const type = field?.type;

  switch (type) {
    case "text":
    case "password":
      return <TextInput {...field} />;
    case "text-area":
      return <TextArea {...field} />;
    default:
      return <TextInput {...field} />;
  }
};

Form.prototype = {
  formFields: PropTypes.arrayOf(PropTypes.object)
};

export default Form;

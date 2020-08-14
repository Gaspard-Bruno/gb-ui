import React, { useRef } from "react";
import PropTypes from "prop-types";

import TextInput from "Components/TextInput";
import TextArea from "Components/TextArea";
import Button from "Components/Button";

import { FormContainer, StyledForm } from "./styles";

const Form = ({
  onSubmit,
  formFields,
  top,
  fullWidth,
  btnLabel = "Inscrever-se",
  children,
  bg
}) => {
  const formRef = useRef();
  return (
    <FormContainer top={top} bg={bg}>
      {children}
      <StyledForm fullWidth={fullWidth} ref={formRef} onSubmit={onSubmit}>
        {formFields &&
          formFields.map((field, index) => {
            return renderFields(field);
          })}
      </StyledForm>
      <Button
        fullWidth
        onClick={onSubmit}
        btnType="primary"
        type="submit"
        text={btnLabel}
      />
    </FormContainer>
  );
};

const renderFields = field => {
  console.log("field", field);
  switch (field?.type) {
    case "text":
    case "password":
      return <TextInput key={field.label} {...field} />;
    case "text-area":
      return <TextArea key={field.label} {...field} />;
    default:
      return;
  }
};

Form.prototype = {
  formFields: PropTypes.arrayOf(PropTypes.object)
};

export default Form;

import React from "react";
import PropTypes from "prop-types";

import { ErrorText, Body } from "Components/Text";
import StyledInput, { InputContainer } from "./style";

const TextInput = ({ error, placeholder, defaultValue, label, onChange }) => (
  <InputContainer error={error}>
    {label && <Body>{label}</Body>}
    <StyledInput error={error} placeholder={placeholder}></StyledInput>
    {error && <ErrorText>{error}</ErrorText>}
  </InputContainer>
);

TextInput.propTypes = {
  error: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func
};

export default TextInput;

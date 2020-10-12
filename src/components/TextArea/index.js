import React from 'react';
import PropTypes from 'prop-types';

import { ErrorText, Body } from '../Text';
import StyledTextArea, { TextAreaContainer } from './style';

const TextArea = ({ error, placeholder, value, label, onChange }) => (
  <TextAreaContainer error={error}>
    {label && <Body>{label}</Body>}
    <StyledTextArea
      resize={false}
      error={error}
      placeholder={placeholder}
      value={value}
    ></StyledTextArea>
    {error && <ErrorText>{error}</ErrorText>}
  </TextAreaContainer>
);

TextArea.propTypes = {
  error: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default TextArea;

import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";

import { ErrorText, Body } from "Components/Text";
import StyledSelect, { SelectContainer, selectStyles } from "./style";

const Select = ({
  error,
  placeholder,
  options = [],
  label,
  onChange,
  isDisabled,
  defaultValue
}) => {
  // TODO Add different color to placeholder
  return (
    <SelectContainer error={error}>
      {label && <Body>{label}</Body>}
      <StyledSelect
        isDisabled={isDisabled}
        styles={selectStyles}
        options={options}
        error={error}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </SelectContainer>
  );
};

Select.propTypes = {
  isDisabled: PropTypes.bool,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        label: PropTypes.string,
        key: PropTypes.string
      }),
      PropTypes.string
    ])
  ),
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func
};

export default Select;

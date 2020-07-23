import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";

import { ErrorText, Body } from "Components/Text";
import StyledSelect, { SelectContainer, SelectOption } from "./style";

const Select = ({
  error,
  placeholder,
  options = [],
  label,
  onChange,
  defaultValue
}) => {
  const handleSelectOption = e => {
    const { value } = e.target;
    if (onChange) {
      onChange(value);
    }
  };
  // TODO Add different color to placeholder
  return (
    <SelectContainer error={error}>
      {label && <Body>{label}</Body>}
      <StyledSelect
        error={error}
        onChange={handleSelectOption}
        defaultValue={placeholder || defaultValue}
      >
        <SelectOption value={placeholder || ""} disabled hidden>
          {placeholder || ""}
        </SelectOption>
        {options.map(o => (
          <SelectOption key={o.key || o} value={o.key || o}>
            {o.label || o}
          </SelectOption>
        ))}
      </StyledSelect>
      {error && <ErrorText>{error}</ErrorText>}
    </SelectContainer>
  );
};

Select.propTypes = {
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

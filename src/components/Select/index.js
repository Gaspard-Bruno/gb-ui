import React from 'react';
import PropTypes from 'prop-types';

import { ErrorText, Body } from '../Text';
import StyledSelect, { SelectContainer, selectStyles } from './style';

const Select = ({
  error,
  placeholder,
  options = [],
  label,
  onChange,
  isMini,
  isDisabled,
  defaultValue,
  isMulti
}) => {
  return (
    <SelectContainer error={error} mini={isMini}>
      <Body>{label || ' '}</Body>
      <StyledSelect
        isMulti={isMulti}
        onChange={onChange}
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
  isMulti: PropTypes.bool,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string
    })
  ),
  isMini: PropTypes.bool,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func
};

export default Select;

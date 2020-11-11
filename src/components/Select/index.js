import React from 'react';
import PropTypes from 'prop-types';

import { ErrorText, Body, Tiny } from '../Text';
import StyledSelect, { SelectContainer, selectStyles } from './style';
import { Row } from '../Layout';
import Button from '../Button';

const Select = ({
  error,
  placeholder = 'Selecionar',
  options = [],
  label,
  onChange,
  onRemove,
  isMini,
  isDisabled,
  defaultValue,
  isMulti,
  isUniq
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
      {isUniq && (
        <Row>
          {defaultValue.map(val => (
            <Button
              key={label + val + 'badge'}
              text={options.find(opt => opt.value === val)?.label}
              icon='trash'
              type='button'
              action={() => onRemove(val)}
            ></Button>
          ))}
        </Row>
      )}
      {error && <ErrorText>{error}</ErrorText>}
    </SelectContainer>
  );
};

Select.propTypes = {
  isDisabled: PropTypes.bool,
  isMulti: PropTypes.bool,
  onRemove: PropTypes.func,
  isUniq: PropTypes.bool,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ),
  isMini: PropTypes.bool,
  label: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onChange: PropTypes.func
};

export default Select;

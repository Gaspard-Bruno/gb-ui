import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Datepicker from 'react-datepicker/dist/es';
import pt from 'date-fns/locale/pt';
import { format } from 'date-fns';

import { ErrorText, Body } from '../Text';
import Icon from '../Icon';
import { InputContainer, StyledIconContainer } from './style';

import 'react-datepicker/dist/react-datepicker.css';

const TextInput = ({
  error,
  placeholder,
  disabled,
  defaultValue,
  label,
  onChange,
  type,
  hasIcon,
  isMini,
  minDate,
  maxDate,
  min,
  max,
  ...otherProps
}) => {
  const isValid = date => {
    const dateObj = new Date(date);
    // eslint-disable-next-line no-self-compare
    return dateObj.getTime() === dateObj.getTime();
  };

  const defaultIcons = [
    { name: 'eye-off', type: 'password' },
    { name: 'eye-on', type: 'text' }
  ];
  const [displayedIcon, setDisplayedIcon] = useState(defaultIcons[0].name);
  const [inputType, setInputType] = useState(type || 'text');
  const [dateValue, setDateValue] = useState(
    (() => {
      const value = otherProps.value || defaultValue;
      if (!value) {
        return null;
      }
      if (inputType === 'date' && value) {
        const split = (value || '').split('/');
        if (split[2]) {
          return new Date(split[1] + '/' + split[0] + '/' + split[2]);
        }
        if (isValid(value)) {
          return new Date(value);
        } else {
          return null;
        }
      }
      return null;
    })()
  );

  const handleIconChange = () => {
    const newIcon = defaultIcons.find(e => e.name !== displayedIcon);
    setInputType(newIcon.type);
    setDisplayedIcon(newIcon.name);
  };

  const isDateValid = isValid(new Date(dateValue));
  return (
    <InputContainer error={error} mini={isMini}>
      {label && <Body>{label || ' '}</Body>}
      {type === 'date' && isDateValid ? (
        <Datepicker
          selected={dateValue}
          showMonthDropdown
          showYearDropdown
          dropdownMode='select'
          dateFormat={'dd/MM/yyyy'}
          placeholderText={placeholder}
          locale={pt}
          onChange={e => {
            if (onChange) {
              onChange(format(e, 'yyyy-MM-dd'));
              setDateValue(e);
            } else {
              setDateValue(new Date(e));
            }
          }}
        />
      ) : (
        <input
          type={inputType}
          error={error}
          disabled={disabled}
          min={min || minDate}
          max={max || maxDate}
          defaultValue={defaultValue}
          value={otherProps.value}
          placeholder={placeholder}
          onChange={e => onChange && onChange(e.target.value)}
        />
      )}
      {hasIcon && (
        <StyledIconContainer>
          <span onClickCapture={handleIconChange}>
            <Icon name={displayedIcon} />
          </span>
        </StyledIconContainer>
      )}
      <ErrorText error={error}>{error}</ErrorText>
    </InputContainer>
  );
};

TextInput.propTypes = {
  error: PropTypes.string,
  disabled: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  isMini: PropTypes.bool,
  hasIcon: PropTypes.bool,
  minDate: PropTypes.string,
  maxDate: PropTypes.string
};

export default TextInput;

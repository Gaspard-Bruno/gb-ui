import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Datepicker, { registerLocale } from 'react-datepicker/dist/es';
import { format } from 'date-fns';

import { ErrorText, Body } from '../Text';
import Icon from '../Icon';
import {
  InputContainer,
  StyledIconContainer,
  StyledErrorContainer
} from './style';

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
  ...otherProps
}) => {
  const defaultIcons = [
    { name: 'eye-off', type: 'password' },
    { name: 'eye-on', type: 'text' }
  ];
  const [displayedIcon, setDisplayedIcon] = useState(defaultIcons[0].name);
  const [inputType, setInputType] = useState(type || 'text');
  const [value, setValue] = useState(otherProps.value);

  const handleIconChange = () => {
    const newIcon = defaultIcons.find(e => e.name !== displayedIcon);
    setInputType(newIcon.type);
    setDisplayedIcon(newIcon.name);
  };
  // const getDateValue = () => {
  //   console.log('got date value', otherProps, value || defaultValue);
  //   if (value || defaultValue) {
  //     const dateValue = new Date(value || defaultValue);
  //     console.log(
  //       '🚀 ~ file: index.js ~ line 46 ~ getDateValue ~ dateValue',
  //       dateValue
  //     );
  //     return format(dateValue, 'dd/MM/yyyy');
  //   }
  // };
  const months = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Oct',
    'Nov',
    'Dez'
  ];
  const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

  const locale = {
    localize: {
      month: n => months[n],
      day: n => days[n]
    },
    formatLong: {}
  };
  registerLocale('pt-PT', locale);
  return (
    <InputContainer error={error} mini={isMini}>
      {label && <Body>{label || ' '}</Body>}
      {type === 'date' ? (
        <Datepicker
          className='datepicker'
          selected={value || (defaultValue && new Date(defaultValue)) || ''}
          dateFormat={'dd/MM/yyyy'}
          locale={'pt-PT'}
          onChange={e => {
            if (onChange) {
              onChange(format(e, 'dd/MM/yyyy'));
            }
            setValue(e);
          }}
        />
      ) : (
        <input
          type={inputType}
          error={error}
          disabled={disabled}
          min={minDate}
          defaultValue={defaultValue}
          value={otherProps.value}
          placeholder={placeholder}
          onChange={e => onChange(e.target.value)}
        />
      )}
      {hasIcon && (
        <StyledIconContainer>
          <span onClickCapture={handleIconChange}>
            <Icon name={displayedIcon} />
          </span>
        </StyledIconContainer>
      )}
      {error && (
        <StyledErrorContainer>
          <ErrorText>{error}</ErrorText>
        </StyledErrorContainer>
      )}
    </InputContainer>
  );
};

TextInput.propTypes = {
  error: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  isMini: PropTypes.bool,
  hasIcon: PropTypes.bool,
  minDate: PropTypes.string
};

export default TextInput;

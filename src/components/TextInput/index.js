import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Datepicker, { registerLocale } from 'react-datepicker/dist/es';
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
  ...otherProps
}) => {
  const defaultIcons = [
    { name: 'eye-off', type: 'password' },
    { name: 'eye-on', type: 'text' }
  ];
  const [displayedIcon, setDisplayedIcon] = useState(defaultIcons[0].name);
  const [inputType, setInputType] = useState(type || 'text');
  const [dateValue, setDateValue] = useState(
    (() => {
      const value = otherProps.value || defaultValue;
      if (inputType === 'date' && value) {
        console.log('checking value');
        const split = (value || '').split('/');
        return split[2]
          ? new Date(split[1] + '/' + split[0] + '/' + split[2])
          : new Date(value);
      }
      return undefined;
    })()
  );

  const handleIconChange = () => {
    const newIcon = defaultIcons.find(e => e.name !== displayedIcon);
    setInputType(newIcon.type);
    setDisplayedIcon(newIcon.name);
  };
  // const getDateValue = () => {
  //   if (value || defaultValue) {
  //     const dateValue = new Date(value || defaultValue);
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
          selected={dateValue || ''}
          dateFormat={'dd/MM/yyyy'}
          locale={'pt-PT'}
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
      <ErrorText error={error}>{error}</ErrorText>
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

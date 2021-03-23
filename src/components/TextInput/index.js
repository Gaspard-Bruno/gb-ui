import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ErrorText, Body } from '../Text';
import Icon from '../Icon';
import StyledInput, { InputContainer, StyledIconContainer } from './style';

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

  const handleIconChange = () => {
    const newIcon = defaultIcons.find(e => e.name !== displayedIcon);
    setInputType(newIcon.type);
    setDisplayedIcon(newIcon.name);
  };
  return (
    <InputContainer error={error} mini={isMini}>
      {hasIcon && (
        <StyledIconContainer>
          <span onClickCapture={handleIconChange}>
            <Icon name={displayedIcon} />
          </span>
        </StyledIconContainer>
      )}
      {label && <Body>{label || ' '}</Body>}
      <StyledInput
        type={inputType}
        error={error}
        disabled={disabled}
        min={minDate}
        defaultValue={defaultValue}
        value={otherProps.value}
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
      />
      {error && <ErrorText>{error}</ErrorText>}
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

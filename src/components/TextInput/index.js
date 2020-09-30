import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ErrorText, Body } from '../Text';
import Icon from '../Icon';
import StyledInput, { InputContainer } from './style';

const TextInput = ({
  error,
  placeholder,
  defaultValue,
  label,
  onChange,
  type,
  hasIcon,
  ...otherProps
}) => {
  const defaultIcons = [
    { name: 'eye-off', type: 'password' },
    { name: 'eye-on', type: 'text' },
  ];
  const [displayedIcon, setDisplayedIcon] = useState(defaultIcons[0].name);
  const [inputType, setInputType] = useState(type || 'text');

  const handleIconChange = () => {
    const newIcon = defaultIcons.find((e) => e.name !== displayedIcon);
    setInputType(newIcon.type);
    setDisplayedIcon(newIcon.name);
  };
  return (
    <InputContainer error={error}>
      {hasIcon && (
        <nav onClickCapture={handleIconChange}>
          <Icon name={displayedIcon} />
        </nav>
      )}
      {label && <Body>{label}</Body>}
      <StyledInput
        type={inputType}
        error={error}
        defaultValue={defaultValue}
        value={otherProps.value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </InputContainer>
  );
};

TextInput.propTypes = {
  error: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  hasIcon: PropTypes.bool,
};

export default TextInput;

import React from 'react';
import PropTypes from 'prop-types';

import { ButtonText } from '../Text';
import Icon from '../Icon';
import StyledButton, { IconButton } from './style';

const Button = ({
  isDisabled,
  btnType,
  text,
  isSmall,
  icon,
  action,
  type,
  isFullWidth,
  children
}) => {
  if (text) {
    return (
      <StyledButton
        fullWidth={isFullWidth}
        btnType={btnType}
        disabled={isDisabled}
        small={isSmall}
        onClick={action}
        type={type}
      >
        {children}
        {text && <ButtonText>{text}</ButtonText>}
        {icon && <Icon name={icon} />}
      </StyledButton>
    );
  }
  if (icon) {
    return (
      <IconButton
        btnType={btnType}
        disabled={isDisabled}
        small={isSmall}
        onClick={action}
        type={type}
      >
        <Icon name={icon} />
      </IconButton>
    );
  }
  return <StyledButton  />;
};

Button.propTypes = {
  isDisabled: PropTypes.bool,
  action: PropTypes.func,
  isSmall: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  type: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  btnType: PropTypes.oneOf([
    'primary',
    'secondary',
    'terceary',
    'transparent',
    'borded',
    'resting',
    'active'
  ]),
  icon: PropTypes.string
};

Button.defaultProps = {
  type: 'primary'
};

export default Button;

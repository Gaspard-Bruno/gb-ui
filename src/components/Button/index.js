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
  children,
  iconColor,
  textColor,
  borderColor,
  ...otherProps
}) => {
  if (text) {
    return (
      <StyledButton
        fullWidth={isFullWidth}
        btnType={btnType}
        disabled={isDisabled}
        small={isSmall}
        onClick={action}
        textColor={textColor}
        borderColor={borderColor}
        type={type}
        {...otherProps}
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
        borderColor={borderColor}
        type={type}
      >
        <Icon name={icon} color={iconColor} />
      </IconButton>
    );
  }
  return <StyledButton />;
};

Button.propTypes = {
  isDisabled: PropTypes.bool,
  action: PropTypes.func,
  isSmall: PropTypes.bool,
  borderColor: PropTypes.string,
  iconColor: PropTypes.string,
  textColor: PropTypes.string,
  isFullWidth: PropTypes.bool,
  type: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  btnType: PropTypes.oneOf(['primary', 'secondary', 'terceary', 'transparent']),
  icon: PropTypes.string
};

Button.defaultProps = {
  type: 'primary'
};

export default Button;

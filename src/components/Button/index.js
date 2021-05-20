import React from 'react';
import PropTypes from 'prop-types';

import { ButtonText } from '../Text';
import Icon from '../Icon';
import StyledButton, { IconButton } from './style';

const Button = ({
  isDisabled,
  variant,
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
  bgColor,
  hoverStyles,
  ...otherProps
}) => {
  if (text) {
    return (
      <StyledButton
        fullWidth={isFullWidth}
        variant={variant}
        disabled={isDisabled}
        small={isSmall}
        onClick={action}
        textColor={textColor}
        borderColor={borderColor}
        bgColor={bgColor}
        type={type}
        hoverStyles={hoverStyles}
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
        variant={variant}
        disabled={isDisabled}
        small={isSmall}
        onClick={action}
        borderColor={borderColor}
        bgColor={bgColor}
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
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  isFullWidth: PropTypes.bool,
  type: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  variant: PropTypes.oneOf(['primary', 'secondary', 'terceary', 'transparent']),
  hoverStyles: PropTypes.shape({
    textColor: PropTypes.string,
    bgColor: PropTypes.string,
    borderColor: PropTypes.string
  }),
  icon: PropTypes.string
};

Button.defaultProps = {
  type: 'primary'
};

export default Button;

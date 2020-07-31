import React from "react";
import PropTypes from "prop-types";

import { ButtonText } from "Components/Text";
import Icon from "Components/Icon";
import StyledButton, { IconButton } from "./style";

const Button = ({
  isDisabled,
  btnType,
  text,
  isSmall,
  icon,
  action,
  children
}) => {
  if (text) {
    return (
      <StyledButton
        btnType={btnType}
        disabled={isDisabled}
        small={isSmall}
        onClick={action}
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
      >
        <Icon name={icon} />
      </IconButton>
    );
  }
  return <StyledButton />;
};

Button.propTypes = {
  isDisabled: PropTypes.bool,
  action: PropTypes.func,
  isSmall: PropTypes.bool,
  text: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  btnType: PropTypes.oneOf(["primary", "secondary", "terceary", "transparent"]),
  icon: PropTypes.string
};

Button.defaultProps = {
  type: "primary"
};

export default Button;

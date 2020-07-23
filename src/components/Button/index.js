import React from "react";
import PropTypes from "prop-types";

import { ButtonText } from "Components/Text";
import Icon from "Components/Icon";
import StyledButton from "./style";

const Button = ({ isDisabled, btnType, text, isSmall, icon, action }) => (
  <StyledButton
    btnType={btnType}
    disabled={isDisabled}
    small={isSmall}
    onClick={action}
  >
    {text && <ButtonText>{text}</ButtonText>}
    {icon && <Icon name={icon} />}
  </StyledButton>
);

Button.propTypes = {
  isDisabled: PropTypes.bool,
  action: PropTypes.func,
  isSmall: PropTypes.bool,
  text: PropTypes.string,
  btnType: PropTypes.oneOf(["primary", "secondary", "terceary"]),
  icon: PropTypes.string
};

Button.defaultProps = {
  type: "primary"
};

export default Button;

import React from "react";
import PropTypes from "prop-types";

import { ButtonText } from "Components/Text";
import Icon from "Components/Icon";
import StyledButton from "./style";

const Button = ({ isDisabled, type, text, isSmall, icon }) => (
  <StyledButton type={type} disabled={isDisabled} small={isSmall}>
    <ButtonText>{text}</ButtonText>
    {icon && <Icon name={icon} />}
  </StyledButton>
);

Button.propTypes = {
  isDisabled: PropTypes.bool,
  isSmall: PropTypes.bool,
  text: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string
};

Button.defaultProps = {
  type: "primary"
};

export default Button;

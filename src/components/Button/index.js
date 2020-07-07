import React from "react";
import PropTypes from "prop-types";

import { ButtonText } from "Components/Text";
import StyledButton from "./style";

const Button = ({ isDisabled, type, text, isSmall }) => (
  <StyledButton type={type} disabled={isDisabled} small={isSmall}>
    <ButtonText to={""}>{text}</ButtonText>
  </StyledButton>
);

Button.propTypes = {
  isDisabled: PropTypes.bool,
  isSmall: PropTypes.bool,
  text: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  type: "primary",
};

export default Button;

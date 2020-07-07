import React from "react";
import PropTypes from "prop-types";
import StyledCard from "./style";

const Card = ({ hasBoxShadow, bg, text, children }) => (
  <StyledCard boxShadow={hasBoxShadow} bg={bg} text={text}>
    {children}
  </StyledCard>
);

Card.propTypes = {
  hasBoxShadow: PropTypes.bool,
  bg: PropTypes.string,
  children: PropTypes.element,
  text: PropTypes.string,
};

export default Card;

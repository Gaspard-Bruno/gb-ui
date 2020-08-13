import React from "react";
import PropTypes from "prop-types";
import StyledCard from "./style";

const Card = ({ justify, align, hasBoxShadow, bg, text, children, isHero }) => (
  <StyledCard
    justify={justify}
    align={align}
    boxShadow={hasBoxShadow}
    bg={bg}
    text={text}
    hero={isHero}
  >
    {children}
  </StyledCard>
);

Card.propTypes = {
  justify: PropTypes.string,
  align: PropTypes.string,
  hasBoxShadow: PropTypes.bool,
  bg: PropTypes.string,
  isHero: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  text: PropTypes.string
};

export default Card;

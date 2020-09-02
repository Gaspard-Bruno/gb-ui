import React from "react";
import PropTypes from "prop-types";
import StyledCard from "./style";

const Card = ({
  justify,
  padding,
  align,
  hasBoxShadow,
  bg,
  text,
  customStyle,
  children
}) => (
  <StyledCard
    justify={justify}
    align={align}
    boxShadow={hasBoxShadow}
    padding={padding}
    customStyle={customStyle}
    bg={bg}
    text={text}
  >
    {children}
  </StyledCard>
);

Card.propTypes = {
  justify: PropTypes.string,
  padding: PropTypes.number,
  align: PropTypes.string,
  customStyle: PropTypes.func,
  hasBoxShadow: PropTypes.bool,
  bg: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  text: PropTypes.string
};

export default Card;

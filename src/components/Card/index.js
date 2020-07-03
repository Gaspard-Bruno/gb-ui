import React from "react";
import PropTypes from "prop-types";
import StyledCard from "./style";

const Navbar = ({ hasBoxShadow, bg, text }) => (
  <StyledCard boxShadow={hasBoxShadow} bg={bg} text={text} />
);

Navbar.propTypes = {
  hasBoxShadow: PropTypes.bool,
  bg: PropTypes.string,
  text: PropTypes.string,
};

export default Navbar;

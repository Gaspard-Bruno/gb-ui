import React from "react";
import PropTypes from "prop-types";
import StyledNavbar from "./style";

const Navbar = ({ children }) => <StyledNavbar>{children}</StyledNavbar>;

Navbar.propTypes = {
  children: PropTypes.element,
};

export default Navbar;

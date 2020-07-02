import React from "react";
import PropTypes from "prop-types";
import StyledNavbar from "./style";
import Logo from "Assets/logo.png";

const Navbar = ({ children }) => (
  <StyledNavbar>
    <img src={Logo} alt="logo" />
    {children}
  </StyledNavbar>
);

Navbar.propTypes = {
  children: PropTypes.element,
};

export default Navbar;

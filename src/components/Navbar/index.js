import React from "react";
import PropTypes from "prop-types";
import StyledNavbar from "./style";
import Logo from "Components/Logo";

const Navbar = ({ children }) => (
  <StyledNavbar>
    <Logo />
    {children}
  </StyledNavbar>
);

Navbar.propTypes = {
  children: PropTypes.element,
};

export default Navbar;

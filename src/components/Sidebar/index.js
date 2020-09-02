import React from "react";
import PropTypes from "prop-types";
import StyledSidebar from "./style";

import Logo from "Components/Logo";

const Sidebar = ({}) => (
  <StyledSidebar>
    <Logo color="white" size={80} isCenter={false} />
  </StyledSidebar>
);

Sidebar.propTypes = {};

export default Sidebar;

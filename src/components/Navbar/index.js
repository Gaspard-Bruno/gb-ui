import React from "react";
import PropTypes from "prop-types";
import { useTranslate } from "polyglot-react-redux-sdk";

import { Link } from "Components/Text";
import Icon from "Components/Icon";
import Logo from "Components/Logo";

import { StyledNavbar, RightSection, LeftSection } from "./style";

const Navbar = ({ children }) => {
  const t = useTranslate("nav");
  return (
    <StyledNavbar>
      <RightSection>
        <li>
          <Link to="/">
            <Logo />
          </Link>
        </li>
        <li>
          <Link to="/about">{t("aboutUs")}</Link>
        </li>
        <li>
          <Icon name="map-pin" />
          {t("country")}
        </li>
      </RightSection>
      <LeftSection>
        <li>
          <Link to="/register">{t("registerAs")}</Link>
        </li>
        <li>
          <Link to="/register">{t("registerAs")}</Link>
        </li>
      </LeftSection>
    </StyledNavbar>
  );
};

Navbar.propTypes = {
  children: PropTypes.element,
};

export default Navbar;

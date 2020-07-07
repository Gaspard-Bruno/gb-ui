import React from "react";
import PropTypes from "prop-types";
import { useTranslate } from "polyglot-react-redux-sdk";

import { Link } from "Components/Text";
import Icon from "Components/Icon";
import Button from "Components/Button";
import Logo from "Components/Logo";

import { StyledNavbar, RightSection, LeftSection } from "./style";

const Navbar = () => {
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
          <Link to="/">
            <Icon name="map-pin" />
            {t("country")}
          </Link>
        </li>
      </RightSection>
      <LeftSection>
        <li>
          <Link to="/register">{t("registerAs")}</Link>
        </li>
        <li>
          <Button text={t("login")} />
        </li>
      </LeftSection>
    </StyledNavbar>
  );
};

export default Navbar;

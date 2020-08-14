import React from "react";
import { useHistory } from "react-router-dom";

import { useTranslate } from "polyglot-react-redux-sdk";

import { Link } from "Components/Text";
import Icon from "Components/Icon";
import Button from "Components/Button";
import Logo from "Components/Logo";

import { StyledNavbar, RightSection, LeftSection, Spacer } from "./style";
import { Col } from "Components/Layout";
const Navbar = props => {
  const history = useHistory();
  const t = useTranslate("nav");
  return (
    <StyledNavbar>
      <LeftSection size={6}>
        <Link to="/">
          <Logo />
        </Link>

        <Link to="/services">{t("services")}</Link>

        <Link to="/about">{t("aboutUs")}</Link>

        <Link to="/">
          <Icon name="map-pin" />
          {t("country")}
        </Link>
      </LeftSection>
      <Spacer size={2} />
      <RightSection size={4}>
        <Link to="/register">{t("registerAs")}</Link>
        
        <Button text={t("login")} action={() => history.push("/login")} />
      </RightSection>
    </StyledNavbar>
  );
};

export default Navbar;

import React from "react";
import { useHistory } from "react-router-dom";

import { useTranslate } from "polyglot-react-redux-sdk";

import { Link } from "Components/Text";
import Icon from "Components/Icon";
import Button from "Components/Button";
import Logo from "Components/Logo";

import { StyledNavbar, RightSection, LeftSection } from "./style";
import { Col } from "Components/Layout";
const Navbar = props => {
  const history = useHistory();
  const t = useTranslate("nav");
  return (
    <StyledNavbar>
      <RightSection>
        <Col>
          <li>
            <Link to="/">
              <Logo />
            </Link>
          </li>
        </Col>
        <Col collapse="mobile">
          <li>
            <Link to="/services">{t("services")}</Link>
          </li>
        </Col>
        <Col collapse="mobile">
          <li>
            <Link to="/about">{t("aboutUs")}</Link>
          </li>
        </Col>
        <Col collapse="mobile">
          <li>
            <Link to="/">
              <Icon name="map-pin" />
              {t("country")}
            </Link>
          </li>
        </Col>
      </RightSection>
      <LeftSection>
        <Col collapse="mobile">
          <li>
            <Link to="/register">{t("registerAs")}</Link>
          </li>
        </Col>
        <li>
          <Button text={t("login")} action={() => history.push("/login")} />
        </li>
      </LeftSection>
    </StyledNavbar>
  );
};

export default Navbar;

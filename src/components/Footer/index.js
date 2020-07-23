import React from "react";
import PropTypes from "prop-types";
import { useTranslate } from "polyglot-react-redux-sdk";

import { Link } from "Components/Text";
import Icon from "Components/Icon";
import Button from "Components/Button";
import Logo from "Components/Logo";

import {
  StyledFooter,
  RightSection,
  LeftSection,
  FooterText,
  CopyrightText
} from "./style";

const Footer = () => {
  const t = useTranslate("footer");
  return (
    <StyledFooter>
      <RightSection>
        <Link to="/">
          <Logo color={"white"} />
        </Link>
        <FooterText>{t("address")}</FooterText>
        <FooterText>{t("phone")}</FooterText>
        <FooterText>{t("email")}</FooterText>
        <CopyrightText>{t("copyright")}</CopyrightText>
      </RightSection>
      <LeftSection>
        <Link to="/">{t("about")}</Link>
        <Link to="/">{t("services")}</Link>
        <Link to="/">{t("becomeSpecialist")}</Link>
      </LeftSection>
      <LeftSection>
        <Link to="/">{t("faqs")}</Link>
        <Link to="/">{t("tnc")}</Link>
        <Link to="/">{t("pp")}</Link>
        <FooterText>
          <Icon name="map-pin" color={"#fff"} />
          {t("lang")}
        </FooterText>
      </LeftSection>
    </StyledFooter>
  );
};

export default Footer;

import React from "react";
import { useTranslate } from "polyglot-react-redux-sdk";

import { Link } from "Components/Text";
import Icon from "Components/Icon";
import Logo from "Components/Logo";
import Button from "Components/Button";

import {
  StyledFooter,
  RightSection,
  LeftSection,
  FooterText,
  CopyrightText,
  FooterBottomLine,
  FooterSocialLine
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
        <FooterSocialLine>
          <Button
            btnType="transparent"
            icon="Facebook"
            action={() => alert("sa")}
          />
          <Button
            btnType="transparent"
            icon="Linkedin"
            action={() => alert("sa")}
          />
          <Button
            btnType="transparent"
            icon="Instagram"
            action={() => alert("sa")}
          />
          <Button
            btnType="transparent"
            icon="Whatsapp"
            action={() => alert("sa")}
          />
        </FooterSocialLine>
      </LeftSection>
      <FooterBottomLine />
    </StyledFooter>
  );
};

export default Footer;

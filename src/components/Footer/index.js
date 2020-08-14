import React from "react";
import { useTranslate } from "polyglot-react-redux-sdk";

import { Link } from "Components/Text";
import Icon from "Components/Icon";
import Logo from "Components/Logo";
import Button from "Components/Button";
import { GridCol } from "Components/Layout";

import {
  FooterContainer,
  StyledFooter,
  BottomMargin,
  TopMargin,
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
    <FooterContainer>
      <StyledFooter>
        <GridCol size={3}>
          <BottomMargin size={1.5}>
            <Link to="/">
              <Logo color={"white"} />
            </Link>
          </BottomMargin>

          <BottomMargin size={1.5}>
            <FooterText>{t("address")}</FooterText>
          </BottomMargin>

          <BottomMargin size={0.5}>
            <FooterText>{t("phone")}</FooterText>
          </BottomMargin>

          <BottomMargin size={2}>
            <FooterText>{t("email")}</FooterText>
          </BottomMargin>

          <CopyrightText>{t("copyright")}</CopyrightText>
        </GridCol>

        <GridCol size={3} />

        <GridCol size={3}>
          <TopMargin size={2.5}>
            <BottomMargin size={1}>
              <Link to="/">{t("about")}</Link>
            </BottomMargin>

            <BottomMargin size={1}>
              <Link to="/">{t("services")}</Link>
            </BottomMargin>

            <BottomMargin size={1}>
              <Link to="/">{t("becomeSpecialist")}</Link>
            </BottomMargin>
          </TopMargin>
        </GridCol>

        <GridCol size={3}>
          <TopMargin size={2.5}>
            <BottomMargin size={1}>
              <Link to="/FAQs">{t("faqs")}</Link>
            </BottomMargin>

            <BottomMargin size={1}>
              <Link to="/TermsAndConditions">{t("tnc")}</Link>
            </BottomMargin>

            <BottomMargin size={1}>
              <Link to="/PrivacyPolicy">{t("pp")}</Link>
            </BottomMargin>

            <BottomMargin size={4}>
              <FooterText>
                <Icon name="map-pin" color={"#fff"} />
                {t("lang")}
              </FooterText>
            </BottomMargin>

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
          </TopMargin>
        </GridCol>

        <FooterBottomLine />
      </StyledFooter>
    </FooterContainer>
  );
};

export default Footer;

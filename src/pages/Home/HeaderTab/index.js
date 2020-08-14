import React from "react";
import { useTranslate } from "polyglot-react-redux-sdk";

import { Page, Row, Col, Hero, GridCol } from "Components/Layout";
import Card from "Components/Card";
import { Jumbo, Body } from "Components/Text";
import Search from "Components/Search";
import Logo from "Components/Logo";

import { JumboContainer, BodyContainer } from "./style";

const HeaderTab = () => {
  const t = useTranslate("home");
  return (
    <Card isHero bg="alt">
      <Hero bg="alt">
        <GridCol size={7}>
          <JumboContainer>
            <Jumbo>{t("title")}</Jumbo>
          </JumboContainer>

          <BodyContainer>
            <Body>{t("subTitle")}</Body>
          </BodyContainer>

          <Search placeholder={t("button.placeholder")} />
        </GridCol>

        <GridCol size={1} />
        <GridCol size={7}>
          <Card bg="transparent">
            <Logo isHero size={400} color={"home"} />
          </Card>
        </GridCol>
      </Hero>
    </Card>
  );
};

export default HeaderTab;

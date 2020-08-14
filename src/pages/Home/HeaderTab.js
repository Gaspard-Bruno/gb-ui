import React from "react";
import { useTranslate } from "polyglot-react-redux-sdk";

import { Page, Row, Col, Hero, GridCol } from "Components/Layout";
import Card from "Components/Card";
import { Jumbo, Body } from "Components/Text";
import Search from "Components/Search";
import Logo from "Components/Logo";

const HeaderTab = () => {
  const t = useTranslate("home");
  return (
    <Hero top bg="alt">
      <GridCol size={7}>
        <Card isHero justify="flex-end" align="center" bg="alt">
          <Jumbo>{t("title")}</Jumbo>
          <Body>{t("subTitle")}</Body>
          <Search placeholder={t("button.placeholder")} />
        </Card>
      </GridCol>

      <GridCol size={1} />

      <GridCol size={7}>
        <Card justify="flex-start" align="center" isHero>
          <Logo isHero size={400} color={"home"} />
        </Card>
      </GridCol>
    </Hero>
  );
};

export default HeaderTab;

import React from "react";
import { useTranslate } from "polyglot-react-redux-sdk";

import { Page, Row, Col, Hero } from "Components/Layout";
import Card from "Components/Card";
import { Jumbo, Body } from "Components/Text";
import Search from "Components/Search";
import Logo from "Components/Logo";

const HeaderTab = () => {
  const t = useTranslate("home");
  return (
    <Hero top bg="alt">
      <Col size={1.5}>
        <Card isHero justify="flex-end" align="center" bg="alt">
          <Col size={0.7}>
            <Jumbo>{t("title")}</Jumbo>
            <Body>{t("subTitle")}</Body>
            <Search placeholder={t("button.placeholder")} />
          </Col>
        </Card>
      </Col>
      <Col size={1}>
        <Card justify="flex-start" align="center" isHero>
          <Col padding="20">
            <Logo isHero size={400} color={"home"} />
          </Col>
        </Card>
      </Col>
    </Hero>
  );
};

export default HeaderTab;

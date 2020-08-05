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
    <Hero top>
      <Col size={0.7}>
        <Card isHero bg="alt">
          <Row>
            <Jumbo>{t("title")}</Jumbo>
            <Body>{t("subTitle")}</Body>
            <Search placeholder={t("button.placeholder")} />
          </Row>
        </Card>
      </Col>
      <Card isHero>
        <Logo size={400} color={"home"} />
      </Card>
    </Hero>
  );
};

export default HeaderTab;

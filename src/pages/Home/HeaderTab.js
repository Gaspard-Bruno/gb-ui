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
      <Card isHero bg="alt">
        <Page>
          <Col size={0.5}>
            <Jumbo>{t("title")}</Jumbo>
            <Body>{t("subTitle")}</Body>
            <Search placeholder={t("button.placeholder")} />
          </Col>
        </Page>
      </Card>
      <Card isHero>
        <Page>
          <Row>
            <Logo size={400} color={"home"} />
          </Row>
        </Page>
      </Card>
    </Hero>
  );
};

export default HeaderTab;

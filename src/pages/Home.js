import React from "react";
import { useTranslate } from "polyglot-react-redux-sdk";

import { Page, Col, Row, Hero } from "Components/Layout";
import Card from "Components/Card";
import { Jumbo, Body } from "Components/Text";
import Search from "Components/Search";

function Home() {
  const t = useTranslate("home");
  return (
    <>
      <Hero>
        <Col size={0.5}>
          <Card bg="alt" isHero>
            <Col>
              <Jumbo>{t("title")}</Jumbo>
              <Body>{t("subTitle")}</Body>
            </Col>
          </Card>
        </Col>
        <Col size={0.5}>
          <Card isHero>
            <Jumbo>{t("title")}</Jumbo>
            <Body>{t("subTitle")}</Body>
            <Search />
          </Card>
        </Col>
      </Hero>
      <Page>
        <Row>
          <Jumbo>{t("title")}</Jumbo>
          <Body>{t("subTitle")}</Body>
        </Row>
      </Page>
    </>
  );
}

export default Home;

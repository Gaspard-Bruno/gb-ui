import React from "react";
import { useTranslate } from "polyglot-react-redux-sdk";

import { Page, Col, Row, Hero } from "Components/Layout";
import Card from "Components/Card";
import { Jumbo, Body } from "Components/Text";
import Search from "Components/Search";
import Tabs from "Components/Tabs";

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
          </Card>
        </Col>
      </Hero>
      <Page>
        <Tabs
          tabs={[
            {
              name: "Initial",
              children: () => (
                <Row>
                  <Jumbo>{t("title")}</Jumbo>
                  <Body>{t("subTitle")}</Body>
                  <Search />
                </Row>
              )
            },

            {
              name: "Second",
              children: () => (
                <Row>
                  <Search />
                </Row>
              )
            }
          ]}
        ></Tabs>
      </Page>
    </>
  );
}

export default Home;

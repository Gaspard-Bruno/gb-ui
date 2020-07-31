import React from "react";
import { useTranslate } from "polyglot-react-redux-sdk";

import { Page, Col, Row, Hero } from "Components/Layout";
import Card from "Components/Card";
import { Jumbo, Body } from "Components/Text";
import Search from "Components/Search";
import Tabs from "Components/Tabs";
import Accordion from "Components/Accordion";
import Badge from "Components/Badge";
import Button from "Components/Button";
import Icon from "Components/Icon";

function Home() {
  const t = useTranslate("home");
  return (
    <>
      <Hero top>
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
            <Button
              btnType="transparent"
              text="text"
              action={() => console.log("!setOpen")}
            >
              <Icon name="eye-off" color="orange" />
            </Button>
            <Search />
          </Card>
        </Col>
      </Hero>
      <Page>
        <Accordion
          title="accordion"
          content={() => <Jumbo>Cenas fixes</Jumbo>}
        ></Accordion>
        <Accordion
          title="Badges"
          content={() => (
            <Row>
              <Badge status="active" text="active" />
              <Badge status="analysis" text="analysis" />
              <Badge status="canceled" text="canceled" />
              <Badge status="chip" text="chip" chip />
            </Row>
          )}
        ></Accordion>
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
Home.whyDidYouRender = {
  logOnDifferentValues: true,
  customName: "Home"
};

export default Home;

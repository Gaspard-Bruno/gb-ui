import React from "react";
import { useTranslate } from "polyglot-react-redux-sdk";

import { Page, Col, Row, Hero } from "Components/Layout";
import Card from "Components/Card";
import { Jumbo, Body } from "Components/Text";
import Search from "Components/Search";

import Button from "Components/Button";
import Icon from "Components/Icon";

function Home() {
  const t = useTranslate("home");
  return (
    <>
      <Hero top>
        <Col size={0.5}>
          <Card bg="alt" isHero>
            <Col padding={200}>
              <Jumbo>{t("title")}</Jumbo>
              <Body>{t("subTitle")}</Body>
              <Search placeholder={t("button.placeholder")} />
            </Col>
          </Card>
        </Col>
        <Col>
          <Card isHero></Card>
        </Col>
      </Hero>
    </>
  );
}
Home.whyDidYouRender = {
  logOnDifferentValues: true,
  customName: "Home"
};

export default Home;

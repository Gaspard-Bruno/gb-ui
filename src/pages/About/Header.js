import React from "react";
import { useTranslate } from "polyglot-react-redux-sdk";

import { Page, Row, Col, Hero } from "Components/Layout";
import Card from "Components/Card";
import { Jumbo, Body, Heading } from "Components/Text";
import Logo from "Components/Logo";

const Header = () => {
  const t = useTranslate("about.header");
  return (
    <Hero top>
      <Col size={1.5}>
        <Card isHero justify="flex-end" align="center" bg="terceary">
          <Col size={0.7}>
            <Heading size={6}>{t("title")}</Heading>
            <Jumbo size={6}>{t("subtitle")}</Jumbo>
            <Body>{t("body")}</Body>
          </Col>
        </Card>
      </Col>
      <Col size={1}>
        <Card justify="flex-start" align="center" isHero>
          <Col padding="20">
            <Logo size={400} color={"about"} />
          </Col>
        </Card>
      </Col>
    </Hero>
  );
};

export default Header;

import React from "react";
import { useTranslate } from "polyglot-react-redux-sdk";
import { Col, Hero, Row } from "Components/Layout";
import { Heading, Body } from "components/Text";
import Card from "Components/Card";
import Logo from "Components/Logo";
const HowItWorksTab = () => {
  const t = useTranslate("home.howItWorks");
  return (
    <Card>
      <Row justifyCenter>
        <Logo size={"inherit"} color={"home"} />
      </Row>
      <Row justityCenter>
        <Heading size={6}>{t("title")}</Heading>
        <Heading size={2}>{t("subtitle")}</Heading>
        <Col>
          <Body>cenas</Body>
          <Body>cenas</Body>
          <Body>cenas</Body>
          <Body>cenas</Body>
        </Col>
      </Row>
    </Card>
  );
};

export default HowItWorksTab;

import React from "react";
import { useTranslate } from "polyglot-react-redux-sdk";

import { Page, Row, Col, Hero } from "Components/Layout";
import Card from "Components/Card";
import { Jumbo, Body, Heading } from "Components/Text";
import Logo from "Components/Logo";

const Header = () => {
  const t = useTranslate("become");
  return (
    <Hero top>
      <Card isHero bg="secondary">
        <Page>
          <Col size={0.5}>
            <Heading size={6}>{t("title")}</Heading>
            <Jumbo>{t("subtitle")}</Jumbo>
            <Body>{t("body")}</Body>
          </Col>
        </Page>
      </Card>
      <Card isHero>
        <Page>
          <Row>
            <Logo size={400} color={"becomeHeaderLogo"} />
          </Row>
        </Page>
      </Card>
    </Hero>
  );
};

export default Header;

import React from "react";
import { useTranslate } from "polyglot-react-redux-sdk";

import { Page, Row, Col, Hero } from "Components/Layout";
import Card from "Components/Card";
import { Heading, Body } from "Components/Text";

const Header = () => {
  const t = useTranslate("servicesPage.header");

  return (
    <Card justify="center">
      <Page>
        <Row>
          <Heading size={1}>{t("title")}</Heading>
        </Row>
        <Row>
          <Body>{t("subtitle")}</Body>
        </Row>
      </Page>
    </Card>
  );
};

export default Header;

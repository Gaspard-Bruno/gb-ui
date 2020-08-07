import React from "react";
import { useTranslate } from "polyglot-react-redux-sdk";

import { Page, Row, Col, Hero } from "Components/Layout";
import Card from "Components/Card";
import { Heading, Body } from "Components/Text";

const Header = () => {
  const t = useTranslate("servicesPage.header");

  return (
    <Page>
      <Row justify="center">
        <Col>
          <Heading styles={{ marginBottom: "0px" }} size={1}>
            {t("title")}
          </Heading>
        </Col>
        <Row justify="center">
          <Col padding={10} size={0.6}>
            <Body style={{ textAlign: "center" }} collapse>
              {t("subtitle")}
            </Body>
          </Col>
        </Row>
      </Row>
    </Page>
  );
};

export default Header;

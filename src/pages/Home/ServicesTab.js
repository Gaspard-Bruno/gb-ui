import React from "react";
import { useTranslate } from "polyglot-react-redux-sdk";
import { Col, Hero, Row, Page } from "Components/Layout";
import { Heading, Body } from "components/Text";
import Card from "Components/Card";
import Tabs from "Components/Tabs";
import Button from "Components/Button";
import Icon from "Components/Icon";

const ServicesTab = () => {
  const t = useTranslate("home.services");

  const tabs = [
    {
      name: "Todos",
      children: () => true
    },
    {
      name: "Acompanhamento",
      children: () => true
    },
    {
      name: "Casa",
      children: () => true
    },
    {
      name: "Aulas",
      children: () => true
    }
  ];

  return (
    <Col>
      {renderTabs(t, tabs)}
      {renderFooter(t)}
    </Col>
  );
};

const renderTabs = (t, tabs) => {
  return (
    <Card>
      <Page>
        <Col>
          <Row align="baseline">
            <Heading size={2}>{t("header")}</Heading>
            <Icon style={{ color: "#F0513A" }} name="map-pin" />
            <Heading style={{ color: "#F0513A" }} size={3}>
              {t("country")}
            </Heading>
          </Row>
          <Row>
            <Tabs justify="center" tabs={tabs} initialTabIndex={0} />
          </Row>
        </Col>
      </Page>
    </Card>
  );
};

const renderFooter = t => {
  return (
    <Card bg="alt">
      <Page>
        <Col>
          <Heading size={2}>{t("footer.title")}</Heading>
          <Body>{t("footer.subTitle")}</Body>
          <Button btnType="borded" text={t("footer.buttonLabel")} />
        </Col>
      </Page>
    </Card>
  );
};

export default ServicesTab;

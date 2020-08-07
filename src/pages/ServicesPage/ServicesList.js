import React from "react";
import { Page, Col, Row } from "Components/Layout";
import { useTranslate } from "polyglot-react-redux-sdk";
import { Heading, Body } from "components/Text";
import Tabs from "Components/Tabs";
import Card from "Components/Card";
import Select from "Components/Select";
import Icon from "Components/Icon";
import TextInput from "Components/TextInput";
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
const ServicesList = () => {
  const t = useTranslate("servicesPage.list");
  return (
    <Card bg="alt">
      <Page>
        <Row style={{ alignItems: "center", justifyContent: "space-between" }}>
          <Col size={0.6}>
            <Icon style={{ position: "absolute" }} name="Search" />
            <TextInput placeholder={t("searchPlaceholder")}></TextInput>
          </Col>
          <Col>
            <Select placeholder={t("selectPlaceholder")} />
          </Col>
          <Col>
            <Tabs tabs={tabs} initialTabIndex={0} />
          </Col>
        </Row>
      </Page>
    </Card>
  );
};

export default ServicesList;

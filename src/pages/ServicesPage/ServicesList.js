import React from "react";
import { Page, Hero, Row } from "Components/Layout";
import { useTranslate } from "polyglot-react-redux-sdk";
import Card from "Components/Card";
const ServicesList = () => {
  const t = useTranslate("servicesPage.list");
  return (
    <Card bg="alt">
      <Page>
        <Row>Services</Row>
      </Page>
    </Card>
  );
};

export default ServicesList;

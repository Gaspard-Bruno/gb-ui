import React from "react";
import { Page, Col, Row } from "Components/Layout";
import { useTranslate } from "polyglot-react-redux-sdk";
import { ServiceCards, ServiceCardImage } from "./styles";
import { Heading, Body, SmallBody } from "components/Text";
import Badge from "Components/Badge";
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

const serviceList = [
  {
    img: "https://i.imgur.com/UPrs1EWl.jpg",
    category: "accompaning",
    body:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",

    heading: "Chef em casa"
  },
  {
    img: "https://i.imgur.com/UPrs1EWl.jpg",
    category: "accompaning",
    body:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",

    heading: "Chef em casa"
  },
  {
    img: "https://i.imgur.com/UPrs1EWl.jpg",
    category: "accompaning",
    body:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",

    heading: "Chef em casa"
  },
  {
    img: "https://i.imgur.com/UPrs1EWl.jpg",
    category: "accompaning",
    body:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",

    heading: "Chef em casa"
  },
  {
    img: "https://i.imgur.com/UPrs1EWl.jpg",
    category: "accompaning",
    body:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",

    heading: "Chef em casa"
  },
  {
    img: "https://i.imgur.com/UPrs1EWl.jpg",
    category: "accompaning",
    body:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",

    heading: "Chef em casa"
  }
];

const ServicesList = () => {
  const t = useTranslate("servicesPage.list");
  return (
    <Card bg="alt">
      <Page>
        {servicesListFilter(t)}
        {servicesCardListing(t, serviceList)}
      </Page>
    </Card>
  );
};

const servicesListFilter = t => {
  return (
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
  );
};

const servicesCardListing = (t, items) => {
  const list =
    items &&
    items.map((item, index) => {
      return (
        <ServiceCards key={`${item}-${index}`}>
          <ServiceCardImage src={item.img} />
          <Row>
            <Col size={0.5} key={`${item}-${index}`}>
              <Badge text={item.category} category={item.category} />
              <Heading size={5}>{item.heading}</Heading>
              <Body>{item.body}</Body>
            </Col>
          </Row>
        </ServiceCards>
      );
    });
  return <Row>{list}</Row>;
};
export default ServicesList;

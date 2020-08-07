import React from "react";
import { useTranslate } from "polyglot-react-redux-sdk";
import { Col, Hero, Row, Page } from "Components/Layout";
import { Heading, Body } from "components/Text";
import Card from "Components/Card";
import Tabs from "Components/Tabs";
import Button from "Components/Button";
import Icon from "Components/Icon";
import ListCarousel from "Components/ListCarousel";

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

  const carouselList = [
    {
      img: "https://i.imgur.com/UPrs1EWl.jpg",
      category: "house",
      text: "Chef em casa"
    },
    {
      img: "https://i.imgur.com/UPrs1EWl.jpg",
      category: "accompaning",
      text: "Acompanhamento familiar de crianças"
    },
    {
      img: "https://i.imgur.com/UPrs1EWl.jpg",
      category: "accompaning",
      text: "Acompanhamento familiar de Seniores"
    },
    {
      img: "https://i.imgur.com/UPrs1EWl.jpg",
      category: "house",
      text: "Chef em casa"
    },
    {
      img: "https://i.imgur.com/UPrs1EWl.jpg",
      category: "accompaning",
      text: "Acompanhamento familiar de crianças"
    },
    {
      img: "https://i.imgur.com/UPrs1EWl.jpg",
      category: "accompaning",
      text: "Acompanhamento familiar de Seniores"
    }
  ];

  return (
    <Col>
      {renderTabs(t, tabs, carouselList)}
      {renderFooter(t)}
    </Col>
  );
};

const renderTabs = (t, tabs, list) => {
  const btnOptions = {
    btnType: "primary",
    text: t("carouselButton"),
    action: () => alert("See all services action")
  };

  return (
    <Card>
      <Page>
        <Col>
          <Row justify="center" align="baseline">
            <Heading size={2}>{t("header")}</Heading>
            <Icon style={{ color: "#F0513A" }} name="map-pin" />
            <Heading style={{ color: "#F0513A" }} size={3}>
              {t("country")}
            </Heading>
          </Row>
          <Row>
            <Tabs justify="center" tabs={tabs} initialTabIndex={0} />
          </Row>
          <ListCarousel hasButton btnOptions={btnOptions} list={list} />
        </Col>
      </Page>
    </Card>
  );
};

const renderFooter = t => {
  return (
    <Card bg="alt">
      <Page>
        <Row justify="center" style={{ flex: 1, textAlign: "center" }}>
          <Heading size={2}>{t("footer.title")}</Heading>
          <Body>{t("footer.subTitle")}</Body>
          <Row style={{ padding: 20 }}>
            <Button btnType="borded" text={t("footer.buttonLabel")} />
          </Row>
        </Row>
      </Page>
    </Card>
  );
};

export default ServicesTab;

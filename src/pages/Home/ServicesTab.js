import React from "react";
import { useTranslate } from "polyglot-react-redux-sdk";
import { Col, Hero, Row, Page, GridCol, GridRow } from "Components/Layout";
import { Heading, Body } from "components/Text";
import Card from "Components/Card";
import Tabs from "Components/Tabs";
import Button from "Components/Button";
import Icon from "Components/Icon";
import Slider from "Components/Slider";
import { useHistory } from "react-router-dom";
import { staticImage, staticImages } from "Assets/img";

const ServicesTab = () => {
  const history = useHistory();
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

  const sliderList = [
    {
      img: staticImages.kitchen,
      category: "house",
      text: "Chef em casa"
    },
    {
      img: staticImages.babySitting,
      category: "accompaning",
      text: "Acompanhamento familiar de crianças"
    },
    {
      img: staticImages.senior,
      category: "accompaning",
      text: "Acompanhamento familiar de Seniores"
    },
    {
      img: staticImages.repairs,
      category: "repairs",
      text: "Reparações"
    },
    {
      img: staticImages.coexist_184,
      category: "accompaning",
      text: "Acompanhamento"
    },
    {
      img: staticImages.coexist_200,
      category: "accompaning",
      text: "Acompanhamento"
    }
  ];

  return (
    <GridCol>
      {renderTabs(t, tabs, sliderList, history)}
      {renderFooter(t)}
    </GridCol>
  );
};

const renderTabs = (t, tabs, list, history) => {
  return (
    <Card>
      <Page>
        <GridRow justify="center">
          <Heading size={2}>{t("header")}</Heading>
          <Icon style={{ color: "#F0513A" }} name="map-pin" />
          <Heading style={{ color: "#F0513A" }} size={3}>
            {t("country")}
          </Heading>
        </GridRow>
        <Row>
          <Tabs tabs={tabs} initialTabIndex={0} />
        </Row>
        <Slider
          hasButton
          action={() => history.push("/services")}
          list={list}
        />
        <GridRow justify="center">
          <Button
            fullWidth
            btnType="primary"
            text={t("button")}
            action={() => history.push("/services")}
          />
        </GridRow>
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
          <Row>
            <Button fullWidth btnType="borded" text={t("footer.buttonLabel")} />
          </Row>
        </Row>
      </Page>
    </Card>
  );
};

export default ServicesTab;

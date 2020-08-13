import React from "react";
import { useTranslate } from "polyglot-react-redux-sdk";

import { Page, Col } from "Components/Layout";
import Card from "Components/Card";
import { Body, Heading } from "Components/Text";
import Logo from "Components/Logo";
import {
  SubHeaderContainer,
  CardContainer,
  ImageContainer,
  SpecialistsSection,
  SpecialistItemsListing
} from "./styles";

import { staticImages } from "Assets/img";

const SubHeader = () => {
  const t = useTranslate("about.subheader");
  return (
    <Page>
      <SubHeaderContainer>
        <Col size={0.6}>
          <Body>{t("header")}</Body>
        </Col>
        {renderSubHeaderCards(t)}
        {renderImage()}
      </SubHeaderContainer>
    </Page>
  );
};

export default SubHeader;

const renderSubHeaderCards = t => {
  return (
    <Page>
      <CardContainer>
        <Card bg="alt">
          <Col>
            <Heading size={5}>{t("card1.title")}</Heading>
            <Body>{t("card1.body")}</Body>
          </Col>
        </Card>
        <Card bg="alt">
          <Col>
            <Heading size={5}>{t("card2.title")}</Heading>
            <Body>{t("card2.body")}</Body>
          </Col>
        </Card>
      </CardContainer>
    </Page>
  );
};

const renderImage = () => {
  const specialistsInfo = [
    {
      logo: "regEspecialistLogo",
      amount: "1773",
      body: "Especialistas 55+ inscritos"
    },
    {
      logo: "activeEspecialistLogo",
      amount: "120",
      body: "Especialistas 55+ Activos"
    },
    {
      logo: "performedServicesLogo",
      amount: "1044",
      body: "Serviços Realizados"
    },
    {
      logo: "activeHoursLogo",
      amount: "6951",
      body: "Horas Activas"
    },
    {
      logo: "totalAmountLogo",
      amount: "40 594€",
      body: "Montante Arrecadado"
    }
  ];

  return (
    <ImageContainer>
      <img alt="" src={staticImages["group_food"]} />
      <SpecialistsSection>
        {specialistsInfo.map(e => {
          return (
            <SpecialistItemsListing key={e.logo}>
              <Logo color={e.logo} />
              <Heading size={2}>{e.amount}</Heading>
              <Body>{e.body}</Body>
            </SpecialistItemsListing>
          );
        })}
      </SpecialistsSection>
    </ImageContainer>
  );
};

import React from "react";
import { useTranslate } from "polyglot-react-redux-sdk";

import { Page, Row, Col, Hero } from "Components/Layout";
import Card from "Components/Card";
import { Jumbo, Body, Heading } from "Components/Text";
import Logo from "Components/Logo";
import { SubHeaderContainer, CardContainer, ImageContainer } from "./styles";

const SubHeader = () => {
  const t = useTranslate("about.subHeader");
  return (
    <Page>
      <SubHeaderContainer>
        <Col size={0.6}>
          <Body>{t("body")}</Body>
        </Col>
      </SubHeaderContainer>
      {renderSubHeaderCards(t)}
      {renderImage()}
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
            <Heading size={5}>{t("card.title")}</Heading>
            <Body>{t("card.body")}</Body>
          </Col>
        </Card>
        <Card bg="alt">
          <Col>
            <Heading size={5}>{t("card.title")}</Heading>
            <Body>{t("card.body")}</Body>
          </Col>
        </Card>
      </CardContainer>
    </Page>
  );
};

const renderImage = () => {
  return (
    <ImageContainer>
      <img alt="" src="https://i.imgur.com/UPrs1EWl.jpg" />
    </ImageContainer>
  );
};
/* body:
"Existem atualmente 2,5 milhões de pessoas inativas com mais de 55 anos em Portugal. E se para muitos a idade pode ser um impedimento para uma vida mais ativa e saudável, para nós é uma excelente oportunidade para se fazer algo de que se gosta e que possa ser útil para a comunidade.",
subHeader: {
body:
  "A 55+ nasceu com o objetivo de prevenir a solidão e a inatividade de todos aqueles com mais de 55 anos de idade, proporcionando-lhes uma vida ativa através da prestação de serviços de qualidade e confiança nos seus bairros, que valorizem os conhecimentos das pessoas e que criem redes de apoio informal sólidas e próximas.",
card: {
  title: ["Especialistas 55+", "Clientes"],
  body: [
    "Garantem uma vida mais saudável, ativa e integrada na comunidade, com uma remuneração extra.",
    "Encontram o apoio de verdadeiros especialistas com anos de experiência em diversas áreas para as tarefas do dia a dia, para além de contribuir para uma causa tão importante e necessária para a sociedade"
  ]
} */

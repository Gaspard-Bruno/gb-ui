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
import { staticImages } from "Assets/img";

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
    img: staticImages.kitchen,
    category: "house",
    body:
      "O serviço ideal para quem tem pouco tempo e muito apetite. Faça o seu pedido, e experimente já os melhores sabores pelas mãos de quem sabe.",
    heading: "Chef em casa"
  },
  {
    img: staticImages.babySitting,
    category: "accompaning",
    body:
      "Uma ida a uma consulta, ao banco ou ao supermercado podem ser tarefas difíceis. Conte com um especialista de confiança para o apoiar na execução de tarefas ou para companhia.",

    heading: "Apoio familiar a Séniores"
  },
  {
    img: staticImages.gardening,
    category: "house",
    body:
      "Já escreveu um livro e teve um filho, só lhe falta plantar uma árvore - ou, pelo menos, ter um bom jardim. Experimente os serviços de jardinagem 55+ e mantenha as suas plantas saudáveis.",

    heading: "Jardinagem"
  },
  {
    img: staticImages.petSitting,
    category: "accompaning",
    body:
      "Se o seu amigo de quatro patas está em casa sozinho enquanto trabalha ou não pode ir de férias consigo, conte com a ajuda de um pet sitter 55+ para o acompanhar.",

    heading: "PetSitting"
  },
  {
    img: staticImages.guitar,
    category: "lessons",
    body:
      "Se sonha um dia subir ao palco e tocar para milhares de pessoas, pouco a pouco se vai longe. Comece por marcar uma aula de música e aprenda as primeiras notas.",

    heading: "Aulas"
  },
  {
    img: staticImages.repairs,
    category: "house",
    body:
      "Pendurar uns quadros, pintar uma parede ou fazer uma reparação em casa? Conte com um especialista 55+ em pequenas reparações e bricolage.",

    heading: "Pequenas Reparações"
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

export default ServicesList;

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

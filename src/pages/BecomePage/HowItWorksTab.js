import React from "react";
import { useTranslate } from "polyglot-react-redux-sdk";
import { Col, Page } from "Components/Layout";
import { Heading } from "components/Text";
import List from "Components/List";
import Card from "Components/Card";
import Logo from "Components/Logo";

const HowItWorksTab = () => {
  const t = useTranslate("become.howItWorks");

  const listArray = [
    "Inscreva-se como especialista 55+ e criaremos o seu perfil.",
    "Aguarde o agendamento da validação dos seus serviços.",
    "Preste os serviços solicitados pelos clientes à 55+.",
    "Receba o pagamento dos seus serviços.",
    "Avalie as suas experiências como 55+ e partilhe connosco a sua opinião e sugestões."
  ];

  return (
    <Card justify="space-evenly">
      <Logo self="center" size={400} color={"becomeBodyLogo"} />
      <Col>
        <Heading size={6}>{t("title")}</Heading>
        <Heading size={2}>{t("subtitle")}</Heading>
        <List hasIcon data={listArray} />
      </Col>
    </Card>
  );
};

export default HowItWorksTab;

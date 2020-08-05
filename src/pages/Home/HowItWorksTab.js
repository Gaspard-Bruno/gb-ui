import React from "react";
import { useTranslate } from "polyglot-react-redux-sdk";
import { Col, Hero, Row } from "Components/Layout";
import { Heading, Body } from "components/Text";
import List from "Components/List";
import Card from "Components/Card";
import Logo from "Components/Logo";
const HowItWorksTab = () => {
  const t = useTranslate("home.howItWorks");

  const listArray = [
    "Explore os nossos serviços e envie-nos o seu pedido.",
    "Nós analisaremos o seu pedido e ligamo-lo ao especialista ideal mais próximo de si.",
    "Efetue o pagamento facilmente, a partir de qualquer lugar.",
    "Receba o nosso especialista e usufrua do  serviço na data e hora agendados.",
    "Envie-nos o seu feedback."
  ];

  return (
    <Card>
      <Logo size={"inherit"} color={"home"} />
      <Heading size={6}>{t("title")}</Heading>
      <Heading size={2}>{t("subtitle")}</Heading>
      <List data={listArray} options={{ list: "none" }} />
    </Card>
  );
};

export default HowItWorksTab;

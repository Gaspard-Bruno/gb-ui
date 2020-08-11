import React from "react";
import { useTranslate } from "polyglot-react-redux-sdk";

import { Page, Row, Col } from "Components/Layout";
import { Body, Heading, SmallBody } from "Components/Text";
import Card from "Components/Card";
import Logo from "Components/Logo";
import { CardContainer, PartnersSection } from "./styles";

const mockedItems = [
  {
    body:
      "Fiquei muito satisfeita com o trabalho do Senhor Fernando em minha casa. Ficou tudo muito bem, concluiu no tempo previsto, tudo conforme tínhamos combinado e deu-me todas as explicações sobre o trabalho realizado. Para além do mais o Senhor Fernando foi pontualíssimo, muito correto e simpático. Isto também quer dizer que, sendo a segunda vez que utilizo os serviços da 55+, continuarei, certamente a utilizar sempre que necessitar.",
    signature: "P.S"
  },
  {
    body:
      "Comemos a semana toda a comidinha vegan da Teresa. O Diogo levou para o almoço no trabalho também e agora depois de jantar ainda sobrou um restinho de guisado de grão. Compensa. AMAMOS. A comida fica boa depois de descongelar.",
    signature: "S.V"
  },
  {
    body:
      "Gostei bastante da atitude pessoal dele. Uma Pessoa educada e serena. E que faz as coisas com gosto e carinho. Posso dizer que um 5 se adequa ao meu atual grau de satisfação. Senti empatia com ele o que me leva a crer que comprarei regularmente para cuidar do quintal e jardim e outras pequenas reparações que surjam.",
    signature: "H.C"
  }
];

// Bottom Header
const Header = () => {
  const t = useTranslate("about.bottomSection");
  return (
    <Page>
      <Heading size={6}>{t("header1")}</Heading>
      <Heading size={3}>{t("header2")}</Heading>
      {renderTestimonials(mockedItems)}
      {renderPartners(t)}
    </Page>
  );
};

export default Header;

// Testimonials
const renderTestimonials = items => {
  const testimonials =
    items &&
    items.map((content, index) => {
      return (
        <Card key={`${content}-${index}`}>
          <Col>
            <Body>{content.body}</Body>
            <SmallBody bold>{content.signature}</SmallBody>
          </Col>
        </Card>
      );
    });
  return <CardContainer borded>{testimonials}</CardContainer>;
};

// Partners
const renderPartners = t => {
  const Logos = [
    "home",
    "home",
    "home",
    "home",
    "home",
    "home",
    "home",
    "home",
    "home",
    "home",
    "home",
    "home"
    /* "cmlLogo",
    "santaCasaLogo",
    "agakhanLogo",
    "inpactHubLogo",
    "trowHatchLogo",
    "hCapitalLogo",
    "lx2020Logo",
    "pt2020Logo",
    "euroLogo",
    "ptLogo",
    "ssLogo",
    "cldsLogo" */
  ];

  return (
    <Col style={{ marginTop: "40px" }}>
      <Row justify="center">
        <Heading size={4}>{t("partners")}</Heading>
      </Row>
      <PartnersSection>
        {Logos.map(icon => {
          return <Logo key={icon} color={icon} />;
        })}
      </PartnersSection>
    </Col>
  );
};

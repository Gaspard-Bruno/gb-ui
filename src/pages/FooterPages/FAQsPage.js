import React from "react";
import {
  Container,
  RightContainer,
  LeftContainer,
  AccordionContainer
} from "./styles";
import { Heading, SmallBody, Link, SmallBodyFAQ } from "Components/Text";
import { useTranslate } from "polyglot-react-redux-sdk";

import Accordion from "Components/Accordion";

const FAQsPage = () => {
  const t = useTranslate("footerPages.FAQ");

  return (
    <Container>
      <LeftContainer>
        <Link to="/FAQS" className="linksFAQ">
          {t("FAQLink")}
        </Link>
        <Link to="/TermsAndConditions" className="linksFAQ">
          {t("tnc")}
        </Link>
        <Link to="/PrivacyPolicy" className="linksFAQ">
          {t("pp")}
        </Link>
      </LeftContainer>
      <RightContainer>
        <SmallBodyFAQ>{t("FAQLink")}</SmallBodyFAQ>
        <Heading>{t("FAQTitle")}</Heading>
        <SmallBody>{t("FAQSubtitle")}</SmallBody>
        <AccordionContainer>
          <Accordion title={t("title")} isOpen={false} content={t("content")} />
          <Accordion title={t("title")} isOpen={false} content={t("content")} />
          <Accordion title={t("title")} isOpen={true} content={t("content")} />
          <Accordion title={t("title")} isOpen={false} content={t("content")} />
          <Accordion title={t("title")} isOpen={false} content={t("content")} />
        </AccordionContainer>
      </RightContainer>
    </Container>
  );
};

export default FAQsPage;

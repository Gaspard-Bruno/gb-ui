import React from "react";
import { ContainerTNC, RightContainer, LeftContainerTNC } from "./styles";
import { Heading, SmallBody, Link, SubHeading } from "Components/Text";
import List from "Components/List";
import { useTranslate } from "polyglot-react-redux-sdk";

const TermsAndConditionsPage = () => {
  const t = useTranslate("footerPages.TermsAndConditions");
  const a = useTranslate("footerPages.FAQ");

  const listArray = [ "Lista 1", "Lista 2", "Lista 3", "Lista 4", "Lista 5" ];

  return (
    <ContainerTNC>
      <LeftContainerTNC>
        <Link to="/FAQS" className="linksFAQ">
          {a("FAQLink")}
        </Link>
        <Link to="/TermsAndConditions" className="linksFAQ">
          {a("tnc")}
        </Link>
        <Link to="/PrivacyPolicy" className="linksFAQ">
          {a("pp")}
        </Link>
      </LeftContainerTNC>
      <RightContainer>
        <Heading>{t("title")}</Heading>
        <SmallBody className="termsAndConditions">{t("firstText")}</SmallBody>
        <SmallBody className="termsAndConditions">{t("secondText")}</SmallBody>
        <SubHeading className="subTitle">{t("subTitle")}</SubHeading>
        <SmallBody className="termsAndConditions">{t("thirdText")}</SmallBody>
        <List hasIcon data={listArray} />
      </RightContainer>
    </ContainerTNC>
  );
};

export default TermsAndConditionsPage;

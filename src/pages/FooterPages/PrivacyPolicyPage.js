import React from "react";
import { ContainerTNC, RightContainer, LeftContainerTNC } from "./styles";
import { Heading, SmallBody, Link, SubHeading } from "Components/Text";
import { useTranslate } from "polyglot-react-redux-sdk";

const PrivacyPolicyPage = () => {
  const t = useTranslate("footerPages.PrivacyPolicy");
  const a = useTranslate("footerPages.FAQ");

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
        <SmallBody className="termsAndConditions">{t("thirdText")}</SmallBody>
      </RightContainer>
    </ContainerTNC>
  );
};

export default PrivacyPolicyPage;

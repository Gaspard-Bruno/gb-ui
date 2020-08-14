import React from "react";
import { useTranslate } from "polyglot-react-redux-sdk";
import { useHistory } from "react-router-dom";
import { Page, Row } from "Components/Layout";
import { Heading, Body } from "Components/Text";
import Button from "Components/Button";
import Card from "Components/Card";
import { FAQHeaderContainer } from "./styles";

const FAQTab = () => {
  const t = useTranslate("become.FAQ");
  const history = useHistory();
  const handleNavigation = () => history.push("/become");

  return (
    <Card>
      <Page>
        <FAQHeaderContainer>
          <Heading size={2}>{t("title")}</Heading>
          <Body>{t("subtitle")}</Body>
          <Row justify="center" style={{ padding: 20 }}>
            <Button
              fullWidth
              btnType="borded"
              text={t("button")}
              action={handleNavigation}
            />
          </Row>
        </FAQHeaderContainer>
      </Page>
    </Card>
  );
};

export default FAQTab;

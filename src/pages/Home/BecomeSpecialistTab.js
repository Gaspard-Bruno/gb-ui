import React from "react";
import { useTranslate } from "polyglot-react-redux-sdk";
import { Page, Row } from "Components/Layout";
import { Heading, Body } from "Components/Text";
import Button from "Components/Button";
import Card from "Components/Card";

const BecomeSpecilistTab = () => {
  const t = useTranslate("home.becomeSpecialist");
  return (
    <Card bg="alt">
      <Page>
        <Row style={{ flexDirection: "column", textAlign: "center" }}>
          <Heading size={2}>{t("title")}</Heading>
          <Body>{t("subTitle")}</Body>
          <Row justify="center" style={{ padding: 20 }}>
            <Button btnType="primary" text={t("buttonLabel")} />
          </Row>
        </Row>
      </Page>
    </Card>
  );
};

export default BecomeSpecilistTab;

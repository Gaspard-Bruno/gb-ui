import React from "react";
import { useTranslate } from "polyglot-react-redux-sdk";
import { useHistory } from "react-router-dom";
import { Page, Row } from "Components/Layout";
import { Heading, Body } from "Components/Text";
import Button from "Components/Button";
import Card from "Components/Card";

const BecomeSpecilistTab = () => {
  const t = useTranslate("home.becomeSpecialist");
  const history = useHistory();
  const handleNavigation = () => history.push("/become");

  return (
    <Card bg="alt">
      <Page>
        <Row style={{ flexDirection: "column", textAlign: "center" }}>
          <Heading size={2}>{t("title")}</Heading>
          <Body>{t("subTitle")}</Body>
          <Row justify="center" style={{ padding: 20 }}>
            <Button
              fullWidth
              btnType="primary"
              text={t("buttonLabel")}
              action={handleNavigation}
            />
          </Row>
        </Row>
      </Page>
    </Card>
  );
};

export default BecomeSpecilistTab;

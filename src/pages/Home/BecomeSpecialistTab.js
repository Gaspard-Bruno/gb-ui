import React from "react";
import { useTranslate } from "polyglot-react-redux-sdk";
import { useHistory } from "react-router-dom";
import { Page, Row, GridCol, GridRow } from "Components/Layout";
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
        <GridRow>
          <GridCol size={3} />
          <GridCol text="center" size={7}>
            <Heading size={2}>{t("title")}</Heading>
            <Body>{t("subTitle")}</Body>
            <Button
              fullWidth
              btnType="primary"
              text={t("buttonLabel")}
              action={handleNavigation}
            />
          </GridCol>
          <GridCol size={3} />
        </GridRow>
      </Page>
    </Card>
  );
};

export default BecomeSpecilistTab;

import { useTranslate } from "polyglot-react-redux-sdk";
import React from "react";

import { Page, Col, Row } from "Components/Layout";
import { Jumbo, Tiny } from "Components/Text";
import Card from "Components/Card";

function Login() {
  const t = useTranslate("login");
  return (
    <Page>
      <Row>
        <Col size={1}>
          <Jumbo>{t("login")}</Jumbo>
        </Col>
        <Col size={2}>
          <Card>
            <Jumbo>{t("login")}</Jumbo>
            <Jumbo>{t("login")}</Jumbo>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col size={2}>
          <Tiny>{t("recoverPwd")}</Tiny>
          <Tiny>{t("cancel")}</Tiny>
        </Col>
      </Row>
    </Page>
  );
}

export default Login;

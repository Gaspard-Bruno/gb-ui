import { useTranslate } from "polyglot-react-redux-sdk";
import React from "react";

import { Page, Col, Row } from "Components/Layout";
import { Title } from "Components/Text";

function Login() {
  const t = useTranslate("login");
  return (
    <Page>
      <Row>
        <Col size={1}>
          <Title>{t("login")}</Title>
        </Col>
        <Col size={2}>
          <Title>{t("login")}</Title>
          <Title>{t("login")}</Title>
        </Col>
      </Row>
      <Row>
        <Col size={2}>
          <Title>{t("recoverPwd")}</Title>
          <Title>{t("cancel")}</Title>
        </Col>
      </Row>
    </Page>
  );
}

export default Login;

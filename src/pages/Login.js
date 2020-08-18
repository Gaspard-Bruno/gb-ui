import { useTranslate } from "polyglot-react-redux-sdk";
import React from "react";

import { Page, Col, Row } from "Components/Layout";
import { Jumbo, Tiny } from "Components/Text";

import TextInput from "Components/TextInput";
import Card from "Components/Card";

function Login() {
  const t = useTranslate("login");
  return (
    <>
      <Page bg="orange">
        <Row>
          <Col size={1}>
            <Jumbo>{t("login")}</Jumbo>
          </Col>
          <Col collapse="mobile" size={2}>
            <Card bg="secondary">
              <TextInput label="email" placeholder="placeholder" />
              <TextInput label="password" type="password" hasIcon />
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
      <Card bg="alt">
        <Tiny>{t("recoverPwd")}</Tiny>
        <Tiny>{t("cancel")}</Tiny>
      </Card>
    </>
  );
}

export default Login;

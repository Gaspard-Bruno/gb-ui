import { useTranslate } from "polyglot-react-redux-sdk";
import React from "react";

import { Page, Col, Row } from "Components/Layout";
import { Jumbo, Tiny } from "Components/Text";

import TextInput from "Components/TextInput";
import TextArea from "Components/TextArea";
import Select from "Components/Select";
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
            <TextInput label="email" placeholder="placeholder" />
            <TextInput label="password" />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col size={2}>
          <Tiny>{t("recoverPwd")}</Tiny>
          <Tiny>{t("cancel")}</Tiny>
        </Col>
      </Row>
      <Row>
        <TextArea
          label="write something bout urself"
          placeholder="cenas"
        ></TextArea>
        <Select
          label="Cenas Selected"
          placeholder="Choose one"
          options={[
            { value: "chocolate", label: "Chocolate" },
            { value: "strawberry", label: "Strawberry" },
            { value: "vanilla", label: "Vanilla" }
          ]}
        />
      </Row>
    </Page>
  );
}

export default Login;

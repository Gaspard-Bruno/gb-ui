import { useTranslate } from "polyglot-react-redux-sdk";
import React from "react";

import { Col, Row, Page } from "Components/Layout";
import { Heading, Link } from "Components/Text";

import TextInput from "Components/TextInput";
import Logo from "Components/Logo";
import Button from "Components/Button";
import { LoginCard } from "./styles";

function Login() {
  const t = useTranslate("login");
  return (
    <Page bg="orange">
      <Row justify="center">
        <Col center size={1}></Col>
        <Col center size={2}>
          <Row>
            <LoginCard padding={4}>
              <Logo isCenter />
              <Heading size={3} center>
                {t("login")}
              </Heading>
              <TextInput label="Email" placeholder="placeholder" />
              <TextInput label="Password" type="password" hasIcon />
              <Row justify="center">
                <Link>Esqueceu a sua senha ?</Link>
              </Row>
              <Row justify="center">
                <Button text="Iniciar Sessão" />
              </Row>
            </LoginCard>
          </Row>
        </Col>
        <Col center size={1}></Col>
      </Row>
    </Page>
  );
}

export default Login;

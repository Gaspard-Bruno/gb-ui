import { useTranslate } from "polyglot-react-redux-sdk";
import React from "react";

import { GridCol, Row } from "Components/Layout";
import { Heading, Link } from "Components/Text";

import TextInput from "Components/TextInput";
import Logo from "Components/Logo";
import Button from "Components/Button";
import Card from "Components/Card";

function Login() {
  const t = useTranslate("login");
  return (
    <>
      <Row justify="center">
        <GridCol center size={6}>
          <Card padding={4}>
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
          </Card>
        </GridCol>
      </Row>
    </>
  );
}

export default Login;

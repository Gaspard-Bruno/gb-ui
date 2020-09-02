import React, { useState } from "react";
import { useTranslate } from "polyglot-react-redux-sdk";

import { Col, Row, Page } from "Components/Layout";
import { Heading, Link } from "Components/Text";
import TextInput from "Components/TextInput";
import Logo from "Components/Logo";
import Button from "Components/Button";
import useAuth from "Hooks/useAuth";

import { LoginCard } from "./styles";

const Login = () => {
  const t = useTranslate("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signInAndRedirectToDashboard } = useAuth();
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
              <TextInput
                label="Email"
                placeholder="placeholder"
                onChange={v => setEmail(v)}
              />
              <TextInput
                onChange={v => setPassword(v)}
                label="Password"
                type="password"
                hasIcon
              />
              <Row justify="center">
                <Link>Esqueceu a sua senha ?</Link>
              </Row>
              <Row justify="center">
                <Button
                  type="submit"
                  text="Iniciar Sessão"
                  action={() => {
                    signInAndRedirectToDashboard(email, password);
                  }}
                />
              </Row>
            </LoginCard>
          </Row>
        </Col>
        <Col center size={1}></Col>
      </Row>
    </Page>
  );
};

export default Login;

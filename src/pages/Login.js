import React, { useState } from "react";
import { useTranslate } from "polyglot-react-redux-sdk";

import { Col, Row, Page } from "Components/Layout";
import { Heading, Link, ErrorText } from "Components/Text";
import TextInput from "Components/TextInput";
import Logo from "Components/Logo";
import Button from "Components/Button";
import Card from "Components/Card";

import useAuth from "Hooks/useAuth";

export const customCardStyle = props => `
  min-width: 311px;
  input {
    margin-bottom: ${props.theme.margin}px;
  }
  a {
    margin-bottom: ${props.theme.margin}px;
    text-align: center;
    color: ${props.theme.colors.brand.orange} !important;
  }
`;

const Login = () => {
  const t = useTranslate("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signInAndRedirectToDashboard, error } = useAuth();

  return (
    <Page bg="orange">
      <Row justify="center">
        <Col size={2} />
        <Col size={6} center>
          <Card padding={4} customStyle={customCardStyle}>
            <Logo isCenter />
            <Heading size={3} center>
              {t("login")}
            </Heading>
            <TextInput label={t("email")} onChange={v => setEmail(v)} />
            <TextInput
              onChange={v => setPassword(v)}
              label={t("password")}
              type="password"
              hasIcon
            />
            {error && <ErrorText>{error}</ErrorText>}
            <Row>
              <Col size={4} center>
                <Link to="/">{t("forgotPw")}</Link>
                <Button
                  type="submit"
                  text={t("login")}
                  action={() => signInAndRedirectToDashboard(email, password)}
                />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col size={2} />
      </Row>
    </Page>
  );
};

export default Login;

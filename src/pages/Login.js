import { useTranslate } from "polyglot-react-redux-sdk";
import React from "react";

import { Page, Col, Row, Hero } from "Components/Layout";
import { Jumbo, Tiny } from "Components/Text";

import TextInput from "Components/TextInput";
import TextArea from "Components/TextArea";
import Select from "Components/Select";
import Card from "Components/Card";
import DropDownMenu from "Components/DropDownMenu";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();

  const t = useTranslate("login");
  return (
    <>
      <Page>
        <Row>
          <Col size={1}>
            <Jumbo>{t("login")}</Jumbo>
          </Col>
          <Col collapse="mobile" size={2}>
            <Card>
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
        <Row>
          <Tiny>
            <DropDownMenu
              menuOptions={[
                {
                  label: "cenas",
                  action: () => history.push("/"),
                  hasIcon: { name: "Facebook" },
                },
                { label: "cenas", action: () => history.push("/") },
                { label: "cenas", action: () => history.push("/") },
              ]}
            />
            <DropDownMenu
              menuOptions={[
                {
                  label: "cenas",
                  action: () => history.push("/"),
                  hasIcon: { name: "Facebook" },
                },
                { label: "cenas", action: () => history.push("/") },
                { label: "cenas", action: () => history.push("/") },
              ]}
            />
          </Tiny>
        </Row>
        <Row>
          <TextArea
            label="write something bout urself"
            placeholder="cenas"
          ></TextArea>
          <Select label="Cenas Selected" placeholder="Choose one" />
        </Row>
      </Page>
      <Hero bg="alt">
        <Tiny>{t("recoverPwd")}</Tiny>
        <Tiny>{t("cancel")}</Tiny>
      </Hero>
    </>
  );
}

export default Login;

import React from "react";
import { useTranslate } from "polyglot-react-redux-sdk";

import { Col, Hero } from "Components/Layout";
import Card from "Components/Card";
import { Jumbo, Body } from "Components/Text";
import Search from "Components/Search";
import Logo from "Components/Logo";

const Header = () => {
  const t = useTranslate("home");
  return (
    <Hero top>
      <Col size={0.5}>
        <Card bg="alt" isHero>
          <Col padding={200}>
            <Jumbo>{t("title")}</Jumbo>
            <Body>{t("subTitle")}</Body>
            <Search placeholder={t("button.placeholder")} />
          </Col>
        </Card>
      </Col>
      <Col>
        <Card isHero>
          <Logo size={"inherit"} color={"home"} />
        </Card>
      </Col>
    </Hero>
  );
};

export default Header;

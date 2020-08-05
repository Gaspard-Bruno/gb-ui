import React from "react";
import { useTranslate } from "polyglot-react-redux-sdk";

import { Col, Hero } from "Components/Layout";
import Card from "Components/Card";
import { Jumbo, Body } from "Components/Text";
import Search from "Components/Search";
import Logo from "Components/Logo";

const HeaderTab = () => {
  const t = useTranslate("home");
  return (
    <Hero top>
      <Card isHero bg="alt">
        <Col padding={200} size={0.5}>
          <Jumbo>{t("title")}</Jumbo>
          <Body>{t("subTitle")}</Body>
          <Search placeholder={t("button.placeholder")} />
        </Col>
        <Col size={0.5}>
          <Card isHero>
            <Logo size={500} color={"home"} />
          </Card>
        </Col>
      </Card>
    </Hero>
  );
};

export default HeaderTab;

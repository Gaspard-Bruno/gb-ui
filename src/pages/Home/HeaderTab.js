import React from "react";
import { useTranslate } from "polyglot-react-redux-sdk";

import { Page, Row, Col, Hero } from "Components/Layout";
import Card from "Components/Card";
import { Jumbo, Body } from "Components/Text";
import Search from "Components/Search";
import Logo from "Components/Logo";

const HeaderTab = () => {
  const t = useTranslate("home");
  return (
    <Card isHero bg="alt">
      <Page>
        <Hero top>
          <Card isHero bg="alt">
            <Row>
              <Jumbo>{t("title")}</Jumbo>
              <Body>{t("subTitle")}</Body>
              <Search placeholder={t("button.placeholder")} />
            </Row>
          </Card>
          <Card isHero>
            <Row>
              <Logo size={400} color={"home"} />
            </Row>
          </Card>
        </Hero>
      </Page>
    </Card>
  );
};

export default HeaderTab;

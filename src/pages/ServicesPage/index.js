import React from "react";
import { useTranslate } from "polyglot-react-redux-sdk";

import { Page, Row, Col, Hero } from "Components/Layout";
import Card from "Components/Card";
import { Jumbo, Body } from "Components/Text";
import Search from "Components/Search";
import Logo from "Components/Logo";

const ServicesPage = () => {
  const t = useTranslate("app");

  return (
    <div>
      <h1>{t("title")}</h1>
      <h1>{t("subTitle")}</h1>
    </div>
  );
};

export default ServicesPage;

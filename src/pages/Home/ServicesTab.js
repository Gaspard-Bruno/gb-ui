import React from "react";
import { useTranslate } from "polyglot-react-redux-sdk";
import { Col, Hero, Row } from "Components/Layout";
import { Heading, ButtonText, Body } from "components/Text";
import { Link } from "Components/Text";
import Icon from "components/Icon";
import Button from "Components/Button";

const Services = () => {
  const t = useTranslate("home.services");

  const buttons = [
    { label: "Todos", action: () => alert("done me Todos!") },
    { label: "Acompanhamento", action: () => alert("done me Acompanhamento!") },
    { label: "Casa", action: () => alert("done me Casa!") },
    { label: "Aulas", action: () => alert("done me Aulas!") },
    {
      label: t("country"),
      action: () => alert("done me country!"),
      icon: { name: "map-pin" }
    }
  ];

  const styles = {
    row: {
      justifyContent: "center"
    }
  };

  return (
    <Hero>
      <Col size={1}>
        {renderButtons(t, styles, buttons)}
        {renderFooter(t, styles)}
      </Col>
    </Hero>
  );
};

const renderButtons = (t, styles, buttons) => {
  return (
    <Col>
      <Row justityCenter>
        <Heading size={2}>{t("header")}</Heading>
      </Row>
      <Row justityCenter>
        {buttons &&
          buttons.map((btn, index) => {
            const hasIcon = btn?.icon?.name ?? false;
            return (
              <Button
                key={`${btn.label}-${index}`}
                btnType="transparent"
                text={btn.label}
                action={btn.action}
                icon={hasIcon}
              />
            );
          })}
      </Row>
    </Col>
  );
};

const renderFooter = (t, styles) => {
  return (
    <Col>
      <Row justityCenter>
        <Heading size={2}>{t("footer.title")}</Heading>
      </Row>
      <Row justityCenter>
        <Body>{t("footer.subTitle")}</Body>
      </Row>
      <Button btnType="borded" text={t("footer.buttonLabel")} />
    </Col>
  );
};

export default Services;

import React from "react";
import { useTranslate } from "polyglot-react-redux-sdk";
import { Col, Hero, Row } from "Components/Layout";
import { Heading, Body } from "components/Text";
import Card from "Components/Card";
import Button from "Components/Button";

const ServicesTab = () => {
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
  return (
    <Col>
      {renderButtons(t, buttons)}
      {renderFooter(t)}
    </Col>
  );
};

const renderButtons = (t, buttons) => {
  return (
    <Col>
      <Row justityCenter>
        <Heading size={2}>{t("header")}</Heading>
      </Row>
      <Row justityCenter>
        {buttons &&
          buttons.map((btn, index) => {
            const icon = btn?.icon?.name ?? "";
            return (
              <Button
                key={`${btn.label}-${index}`}
                btnType="transparent"
                text={btn.label}
                action={btn.action}
                icon={icon}
              />
            );
          })}
      </Row>
    </Col>
  );
};

const renderFooter = t => {
  return (
    <Card bg="alt">
      <Col>
        <Heading size={2}>{t("footer.title")}</Heading>
        <Body>{t("footer.subTitle")}</Body>
        <Button btnType="borded" text={t("footer.buttonLabel")} />
      </Col>
    </Card>
  );
};

export default ServicesTab;

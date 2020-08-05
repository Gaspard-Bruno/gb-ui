import React from "react";
import { useTranslate } from "polyglot-react-redux-sdk";
import { Col, Hero, Row } from "Components/Layout";
import { Heading, Body } from "components/Text";
import Card from "Components/Card";
import Button from "Components/Button";
import Select from "Components/Select";
const ServicesTab = () => {
  const t = useTranslate("home.services");

  const buttons = [
    {
      label: "Todos",
      action: () => alert("done me Todos!"),
      type: "transparent"
    },
    {
      label: "Acompanhamento",
      action: () => alert("done me Acompanhamento!"),
      type: "transparent"
    },
    {
      label: "Casa",
      action: () => alert("done me Casa!"),
      type: "transparent"
    },
    {
      label: "Aulas",
      action: () => alert("done me Aulas!"),
      type: "transparent"
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
        <Button
          btnType="transparent"
          text={t("country")}
          icon="map-pin"
        ></Button>
      </Row>
      <Row justityCenter>
        {buttons &&
          buttons.map((btn, index) => {
            const icon = btn?.icon?.name ?? "";
            return (
              <Button
                key={`${btn.label}-${index}`}
                btnType={btn.type}
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

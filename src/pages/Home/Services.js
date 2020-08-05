import React from "react";
import { useTranslate } from "polyglot-react-redux-sdk";
import { Col, Hero, Row } from "Components/Layout";
import { Heading, ButtonText } from "components/Text";
import { Link } from "Components/Text";
import Icon from "components/Icon";
import Button from "Components/Button";

const Services = () => {
  const t = useTranslate("home.services");

  const buttonsMock = [
    { label: "Todos", action: () => alert("done me Todos!") },
    { label: "Acompanhamento", action: () => alert("done me Acompanhamento!") },
    { label: "Casa", action: () => alert("done me Casa!") },
    { label: "Aulas", action: () => alert("done me Aulas!") },
    {
      label: t("country"),
      action: () => alert("done me Aulas!"),
      icon: { name: "map-pin" }
    }
  ];

  return (
    <Hero top>
      <Col>
        <Row style={{ justifyContent: "center" }}>
          <Heading size={2}>{t("header")}</Heading>
        </Row>
        {renderButtons(buttonsMock)}
        {/* <Link to="/">
          <Icon name="map-pin" />
          {t("country")}
        </Link> */}
      </Col>
    </Hero>
  );
};

const renderButtons = buttons => {
  return (
    <Row>
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
  );
};

export default Services;

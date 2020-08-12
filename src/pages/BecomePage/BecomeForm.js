import React from "react";
import { useTranslate } from "polyglot-react-redux-sdk";
import Form from "Components/Form";
import Card from "Components/Card";
import { Heading, Body } from "Components/Text";
import { Page, Col, Row } from "Components/Layout";

const BecomeForm = () => {
  const mockedFields = [
    { type: "text", label: "Nome" },
    { type: "text", label: "Apelido" },
    { type: "text", label: "Endereço de Email" },
    { type: "text", label: "Número de Telefone" },
    {
      type: "text-area",
      label: "details",
      placeholder:
        "Ocasião (almoço/jantar, refeições semanais ou evento/festa), tipo de prato, composição do menu (entrada, prato ou sobremesa), nº de pessoas, data do serviço."
    }
  ];

  const t = useTranslate("become.form");

  return (
    <Page>
      <Form
        bg="alt"
        fullWidth
        formFields={mockedFields}
        onSubmit={handleSubmit}
      >
        <Col>
          <Row justify="center">
            <Heading size={3}>{t("title")}</Heading>
            <Body>{t("subtitle")}</Body>
          </Row>
        </Col>
      </Form>
    </Page>
  );
};

const handleSubmit = () => console.log("submited");
export default BecomeForm;

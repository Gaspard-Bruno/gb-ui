import React from "react";
import Form from "Components/Form";
import Card from "Components/Card";
import { Page } from "Components/Layout";

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
  return (
    <Page>
      <Card bg="alt">
        <Form formFields={mockedFields} onSubmit={handleSubmit} />
      </Card>
    </Page>
  );
};

const handleSubmit = () => alert("submited");
export default BecomeForm;

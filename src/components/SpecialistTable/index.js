import React from "react";

import { useTranslate } from "polyglot-react-redux-sdk";

import { Col } from "Components/Layout";
import Avatar from "Components/Avatar";
import TableRow from "./TableRow";

import StyledSpecialistTable, { Header } from "./style";

const SpecialistTable = ({ items }) => {
  const t = useTranslate("specialists");

  return (
    <StyledSpecialistTable>
      <Header>
        <Col size={3}>{t("name")}</Col>

        <Col size={3}>{t("service")}</Col>

        <Col size={2}>{t("region")}</Col>

        <Col size={2}>{t("totalPrice")}</Col>

        <Col size={2}>{t("state")}</Col>
      </Header>

      {items &&
        Object.keys(items).map((item, index) => {
          return <TableRow key={"specialistRow" + index} item={items[item]} />;
        })}
    </StyledSpecialistTable>
  );
};

export default SpecialistTable;

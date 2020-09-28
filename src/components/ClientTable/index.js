import React from "react";

import { useTranslate } from "polyglot-react-redux-sdk";

import { Col } from "Components/Layout";
import Avatar from "Components/Avatar";
import TableRow from "./TableRow";

import StyledClientTable, { Header } from "./style";

const ClientTable = ({ items }) => {
  const t = useTranslate("clients");

  return (
    <StyledClientTable>
      <Header>
        <Col size={9}>{t("name")}</Col>

        <Col size={3}>{t("region")}</Col>
      </Header>

      {items &&
        Object.keys(items).map((item, index) => {
          return <TableRow key={"clientTable" + index} item={items[item]} />;
        })}
    </StyledClientTable>
  );
};

export default ClientTable;

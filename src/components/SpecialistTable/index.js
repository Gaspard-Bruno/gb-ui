import React from "react";

import { useTranslate } from "polyglot-react-redux-sdk";

import { Col } from "Components/Layout";
import Avatar from "Components/Avatar";

import StyledSpecialistTable, { Header, StyledTableRow } from "./style";

const TableRow = ({ item }) => {
  const formatServiceCell = serviceNames => {
    if (serviceNames.length >= 2) {
      return `${serviceNames[0]}, ${serviceNames[1]}...`;
    } else if (serviceNames.length > 0) {
      return `${serviceNames[0]}`;
    }
  };

  // console.log("item", item)

  return (
    <StyledTableRow>
      <Col size={3}>
        {item.attributes && (
          <Avatar size="small" hasText={true} user={item.attributes} />
        )}
      </Col>

      <Col size={3}>
        {item.attributes.serviceNames && (
          <span>{formatServiceCell(item.attributes.serviceNames)}</span>
        )}
      </Col>

      <Col size={2}>Lisboa</Col>

      <Col size={2}>{/* {item.attributes.deliveredOn} */}</Col>

      <Col size={2}>
        <span>{item.attributes.status}</span>
      </Col>
    </StyledTableRow>
  );
};

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

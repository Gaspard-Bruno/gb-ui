import React from "react";

import { useTranslate } from "polyglot-react-redux-sdk";

import { Col } from "Components/Layout";
import Avatar from "Components/Avatar";

import StyledTableRow from "./style";

const TableRow = ({ item }) => {
  // TODO: Proptypes for the item
  const { service, client, provider } = item;
  const t = useTranslate("archive");
  return (
    <StyledTableRow>
      <Col size={2}>
        {service && <span className="service">{service.name}</span>}
      </Col>

      <Col size={2}>
        {client && <Avatar size="small" hasText={true} user={client} />}
      </Col>

      <Col size={2}>
        {provider && <Avatar size="small" hasText={true} user={provider} />}
      </Col>

      <Col size={2}>
        {item.attributes.deliveredOn &&
          new Date(item.attributes.deliveredOn).toLocaleDateString()}
      </Col>

      <Col size={2}>
        {item.attributes.totalHours ? (
          <span>
            {item.attributes.totalHours} {t("hours")}
          </span>
        ) : (
          <span></span>
        )}
      </Col>

      <Col size={2}>{/* {item.totalPrice}€ */}</Col>
    </StyledTableRow>
  );
};

export default TableRow;

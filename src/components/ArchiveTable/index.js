import React, { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";

import { useTranslate } from "polyglot-react-redux-sdk";

import useProviders from "Hooks/useProviders.js";
import useClients from "Hooks/useClients.js";
import useServices from "Hooks/useServices";

import { Col } from "Components/Layout";
import Avatar from "Components/Avatar";

import StyledArchiveTable, { Header, StyledTableRow } from "./style";

const TableRow = ({ item }) => {
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

const ArchiveTable = ({ items }) => {
  const t = useTranslate("archive");

  const { clients } = useClients();

  const { services } = useServices();

  const { providers } = useProviders();

  return (
    <StyledArchiveTable>
      <Header>
        <Col size={2}>{t("serviceType")}</Col>

        <Col size={2}>{t("client")}</Col>

        <Col size={2}>{t("provider")}</Col>

        <Col size={2}>{t("date")}</Col>

        <Col size={2}>{t("totalHours")}</Col>

        <Col size={2}>{t("totalPrice")}</Col>
      </Header>

      {items &&
        items.map((item, index) => {
          const clientId = item.relationships.client.data.id;
          const serviceId = item.relationships.service.data.id;
          const providerId = item?.relationships?.provider?.data?.id || 0;
          const provider = providers?.[providerId]?.attributes;
          const client = clients?.[clientId]?.attributes;
          const service = services?.[serviceId]?.attributes;

          return (
            <TableRow
              key={`archive-row` + index}
              item={{ ...item, provider, client, service }}
            />
          );
        })}
    </StyledArchiveTable>
  );
};

export default ArchiveTable;

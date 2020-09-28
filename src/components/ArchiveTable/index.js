import React from "react";
import PropTypes from "prop-types";
import { useTranslate } from "polyglot-react-redux-sdk";

import useProviders from "Hooks/useProviders.js";
import useClients from "Hooks/useClients.js";
import useServices from "Hooks/useServices";

import { Col } from "Components/Layout";
import TableRow from "./TableRow";

import StyledArchiveTable, { Header } from "./style";

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
              key={"archive-row" + index}
              item={{ ...item, provider, client, service }}
            />
          );
        })}
    </StyledArchiveTable>
  );
};

ArchiveTable.propTypes = {
  items: PropTypes.array
};

export default ArchiveTable;

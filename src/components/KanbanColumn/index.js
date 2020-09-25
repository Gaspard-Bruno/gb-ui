import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import { useTranslate } from "polyglot-react-redux-sdk";
import { Droppable } from "react-beautiful-dnd";

import KanbanCard from "Components/KanbanCard";
import Icon from "Components/Icon";
import { SubHeading } from "Components/Text";

import StyledKanbanColumn, { Header, IconContainer } from "./style";

const KanbanColumn = ({ status, items, kanbanType, containerHeight, data }) => {
  const t = useTranslate(kanbanType);
  const providers = (data && data.providers) || null;
  const clients = (data && data.clients) || null;
  const services = (data && data.services) || null;
  const admins = (data && data.admins) || null;

  const itemsRef = useRef(null);

  const getCardPropsFromType = item => {
    if (kanbanType === "candidates") {
      return {
        status: item.attributes.status,
        cardType: kanbanType,
        adminId: item.relationships.assignedTo.data?.id
      };
    } else {
      return {
        status: item.attributes.status,
        cardType: kanbanType,
        recurrent: item.attributes.recurrent,
        adminId: item.relationships.admin.data?.id,
        clientId: item.relationships.client.data?.id,
        serviceId: item.relationships.service.data?.id
      };
    }
  };

  return (
    <Droppable droppableId={status} key={"column" + status}>
      {provided => (
        <StyledKanbanColumn
          containerHeight={containerHeight}
          ref={provided.innerRef}
        >
          <Header>
            {status && <SubHeading>{t(status)}</SubHeading>}
            <IconContainer>
              <Icon name="maximize" />
            </IconContainer>
          </Header>
          {items &&
            items.map((item, index) => {
              const {
                status,
                cardType,
                recurrent,
                adminId,
                clientId,
                serviceId
              } = getCardPropsFromType(item);

              const providerId = item.relationships.provider.data
                ? item.relationships.provider.data.id
                : null;
              const provider = providers?.[providerId];
              const client = clients?.[clientId];
              const admin = admins?.[adminId];
              const service = services?.[serviceId];
              console.log("provided", provided);
              return (
                <KanbanCard
                  key={"kanbanCard" + index}
                  status={status}
                  cardType={cardType}
                  admin={admin}
                  provider={provider}
                  client={client}
                  service={service}
                  recurrent={recurrent}
                />
              );
            })}
        </StyledKanbanColumn>
      )}
    </Droppable>
  );
};

KanbanColumn.propTypes = {
  status: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  kanbanType: PropTypes.oneOf(["requests", "candidates"]),
  containerHeight: PropTypes.number
};

export default KanbanColumn;

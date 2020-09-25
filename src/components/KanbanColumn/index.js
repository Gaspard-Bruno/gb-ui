import React, { useCallback } from "react";
import PropTypes from "prop-types";

import { useTranslate } from "polyglot-react-redux-sdk";
import { Droppable } from "react-beautiful-dnd";

import KanbanCard from "Components/KanbanCard";
import Icon from "Components/Icon";
import { SubHeading } from "Components/Text";

import StyledKanbanColumn, { Header, IconContainer } from "./style";

const KanbanColumn = ({ colName, items, kanbanType, data }) => {
  const t = useTranslate(kanbanType);

  const renderCards = useCallback(
    dndProps =>
      items.map((item, index) => {
        const cardProps = {
          id: item.id,
          status: item.attributes.status,
          isRecurrent: item.attributes.recurrent,
          admin: data.admins[item.relationships.admin.data?.id],
          client: data.clients[item.relationships.client.data?.id],
          service: data.services[item.relationships.service.data?.id]
        };
        return (
          <KanbanCard
            key={"kanbanCard" + item.id}
            cardKey={"kanbanCard" + item.id}
            cardType={kanbanType}
            index={index}
            cardData={cardProps}
          />
        );
      }),
    [data.admins, data.clients, data.services, items, kanbanType]
  );

  return (
    <Droppable droppableId={colName} key={"column" + colName}>
      {provided => (
        <StyledKanbanColumn
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <Header>
            {colName && <SubHeading>{t(colName)}</SubHeading>}
            <IconContainer>
              <Icon name="maximize" />
            </IconContainer>
          </Header>
          {provided.placeholder}
          {renderCards(provided)}
        </StyledKanbanColumn>
      )}
    </Droppable>
  );
};

KanbanColumn.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  kanbanType: PropTypes.oneOf(["requests", "candidates"]),
  colName: PropTypes.string,
  data: PropTypes.shape({
    admins: PropTypes.object,
    clients: PropTypes.object,
    services: PropTypes.object
  })
};

export default KanbanColumn;

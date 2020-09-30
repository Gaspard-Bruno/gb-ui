import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';

import t from '../../utils/translation';

import KanbanCard from '../KanbanCard';
import Icon from '../Icon';
import { SubHeading } from '../Text';

import StyledKanbanColumn, {
  Header,
  IconContainer,
  ColumnCardsContainer,
} from './style';

const KanbanColumn = ({ colName, items, kanbanType, data, translate }) => {
  const renderCards = useCallback(
    () =>
      items.map((item, index) => {
        const cardProps = {
          id: item.id,
          status: item.attributes.status,
          isRecurrent: item.attributes.recurrent,
          admin: data.admins[item.relationships?.admin?.data?.id],
          client: data.clients[item.relationships?.client?.data?.id],
          service: data.services[item.relationships?.service?.data?.id],
          provider: data.providers[item.relationships?.provider?.data?.id],
        };
        return (
          <KanbanCard
            key={'kanbanCard' + item.id}
            cardKey={item.id}
            cardType={kanbanType}
            index={index}
            cardData={cardProps}
          />
        );
      }),
    [data, items, kanbanType]
  );

  return (
    <Droppable droppableId={colName} key={'column' + colName}>
      {(provided) => (
        <StyledKanbanColumn
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <Header>
            {colName && <SubHeading>{t(translate, colName)}</SubHeading>}
            <IconContainer>
              <Icon name='maximize' />
            </IconContainer>
          </Header>
          {provided.placeholder}
          <ColumnCardsContainer>{renderCards()}</ColumnCardsContainer>
        </StyledKanbanColumn>
      )}
    </Droppable>
  );
};

KanbanColumn.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  translate: PropTypes.func,
  kanbanType: PropTypes.oneOf(['requests', 'candidates']),
  colName: PropTypes.string,
  data: PropTypes.shape({
    admins: PropTypes.object,
    providers: PropTypes.object,
    clients: PropTypes.object,
    services: PropTypes.object,
  }),
};

export default KanbanColumn;

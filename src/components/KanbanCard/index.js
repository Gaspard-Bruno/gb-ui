import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

import t from '../utils/translation';

import Badge from '../Badge';
import Icon from '../Icon';
import Avatar from '../Avatar';
import { ButtonText, SmallBody } from '../Text';

import StyledKanbanCard, {
  BadgeContainer,
  Details,
  IconContainer,
  AdminContainer,
  ServiceDetails,
  Recurrent
} from './style';

const KanbanCard = ({ cardKey, index, cardData, cardType, translate }) => {
  return (
    <Draggable key={cardKey} draggableId={cardKey} index={index}>
      {(provided, snapshot) => {
        return (
          <StyledKanbanCard
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <BadgeContainer>
              <Badge text={cardData.status} status={cardData.status} />
            </BadgeContainer>

            <ButtonText>
              {cardType === 'candidates'
                ? cardData.provider?.attributes.fullName
                : cardData.service?.attributes.name}
            </ButtonText>

            {cardType === 'candidates' ? (
              <div>
                {cardData.provider?.attributes.serviceList && (
                  <Details>
                    <IconContainer>
                      <Icon name='tool-1' />
                    </IconContainer>

                    <SmallBody>
                      {cardData.provider?.attributes.serviceList}
                    </SmallBody>
                  </Details>
                )}

                {cardData.provider?.attributes.district && (
                  <Details>
                    <IconContainer>
                      <Icon name='map-pin' />
                    </IconContainer>

                    <SmallBody>
                      {cardData.provider?.attributes.district}
                    </SmallBody>
                  </Details>
                )}
              </div>
            ) : (
              <div>
                {cardData.client && (
                  <ServiceDetails>
                    <span>{t(translate, 'client')}: </span>
                    {cardData.client.attributes.fullName}
                  </ServiceDetails>
                )}
                {cardData.provider && (
                  <ServiceDetails>
                    <span>{t(translate, 'specialist')}: </span>
                    {cardData.provider.attributes.fullName}
                  </ServiceDetails>
                )}
                {cardData.isRecurrent && <Recurrent></Recurrent>}
              </div>
            )}

            {cardData.admin && (
              <AdminContainer>
                <Avatar
                  user={cardData.admin?.attributes}
                  size='small'
                  hasText={true}
                ></Avatar>
              </AdminContainer>
            )}
          </StyledKanbanCard>
        );
      }}
    </Draggable>
  );
};

KanbanCard.propTypes = {
  cardKey: PropTypes.string,
  index: PropTypes.number,
  cardType: PropTypes.oneOf(['requests', 'candidates']),
  translate: PropTypes.func,
  cardData: PropTypes.shape({
    id: PropTypes.string,
    status: PropTypes.string,
    isRecurrent: PropTypes.bool,
    admin: PropTypes.object,
    client: PropTypes.object,
    provider: PropTypes.object,
    service: PropTypes.object
  })
};

export default KanbanCard;

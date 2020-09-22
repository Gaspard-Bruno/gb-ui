import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import { useTranslate } from 'polyglot-react-redux-sdk';

import KanbanCard from 'Components/KanbanCard';
import Icon from 'Components/Icon';
import { SubHeading } from 'Components/Text';

import StyledKanbanColumn, { Header, IconContainer } from "./style";

const KanbanColumn = ({
    status,
    items,
    kanbanType,
    containerHeight
}) => {
  const t = useTranslate(kanbanType);

  const [columnHeight, setColumnHeight] = useState(0);
  const itemsRef = useRef(null);
  useEffect(() => {
    setColumnHeight(itemsRef.current.clientHeight)
  }, [items])

  const getCardPropsFromType = (item) => {
      if (kanbanType === 'candidates') {
          return {
            status: item.attributes.status,
            cardType: kanbanType,
            adminId: item.relationships.assignedTo.data?.id,
            providerId: item.relationships.provider.data?.id
          }
      } else {
          return {
            status: item.attributes.status,
            cardType: kanbanType,
            serviceId: item.relationships.service.data?.id,
            adminId: item.relationships.admin.data?.id,
            providerId: item.relationships.provider.data?.id,
            clientId: item.relationships.client.data?.id,
            recurrent: item.attributes.recurrent,
          }
      }
  }

  return (
    <StyledKanbanColumn itemsHeight={columnHeight} containerHeight={containerHeight}>
        <Header>
            {status &&
                <SubHeading>{t(status)}</SubHeading>
            }
            <IconContainer>
                <Icon name='maximize' />
            </IconContainer>
        </Header>
        
        <div ref={itemsRef} className="items">
            {items && items.map((item) => {
                const {status, cardType, adminId, serviceId, clientId, providerId, recurrent} = getCardPropsFromType(item);
                return (
                    <KanbanCard 
                        status={status}
                        cardType={cardType}
                        adminId={adminId}
                        providerId={providerId}
                        clientId={clientId}
                        serviceId={serviceId}
                        recurrent={recurrent}
                    />
                )
            })
            }
        </div>
    </StyledKanbanColumn>
  )
};

KanbanColumn.propTypes = {
    status: PropTypes.string,
    items: PropTypes.arrayOf([PropTypes.object]),
    kanbanType: PropTypes.oneOf(['requests', 'candidates']),
    containerHeight: PropTypes.number
};

export default KanbanColumn;

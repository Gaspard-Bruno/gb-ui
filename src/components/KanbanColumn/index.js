import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import { useTranslate } from 'polyglot-react-redux-sdk';

import useProviders from "Hooks/useProviders.js";
import useClients from "Hooks/useClients.js";
import useServices from "Hooks/useServices";
import useAdmin from "Hooks/useAdmin.js";

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
            adminId: item.relationships.assignedTo.data?.id
          }
      } else {
          return {
            status: item.attributes.status,
            cardType: kanbanType,
            recurrent: item.attributes.recurrent,
            adminId: item.relationships.admin.data?.id,
            clientId: item.relationships.client.data?.id,
            serviceId: item.relationships.service.data?.id,
          }
      }
  }

  const { providers } = useProviders();
  const { clients } = useClients();
  const { services } = useServices();
  const { admins } = useAdmin();

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
            {items && items.map((item, index) => {
                const {status, cardType, recurrent, adminId, clientId, serviceId} = getCardPropsFromType(item);

                const providerId = item.relationships.provider.data
                    ? item.relationships.provider.data.id
                    : null;
                const provider = providers?.[providerId];
                const client = clients?.[clientId];
                const admin = admins?.[adminId];
                const service = services?.[serviceId];                

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
                )
            })
            }
        </div>
    </StyledKanbanColumn>
  )
};

KanbanColumn.propTypes = {
    status: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object),
    kanbanType: PropTypes.oneOf(['requests', 'candidates']),
    containerHeight: PropTypes.number
};

export default KanbanColumn;

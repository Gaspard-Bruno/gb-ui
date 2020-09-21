import React from "react";
import PropTypes from "prop-types";

import { useTranslate } from 'polyglot-react-redux-sdk';

import KanbanCard from 'Components/KanbanCard';
import Icon from 'Components/Icon';
import { SubHeading } from 'Components/Text';

import StyledKanbanColumn, { Header, IconContainer } from "./style";

const KanbanColumn = ({
    status,
    items,
    kanbanType
}) => {
  const t = useTranslate('candidates');

  return (
    <StyledKanbanColumn>
        <Header>
            {status &&
                <SubHeading>{t(status)}</SubHeading>
            }
            <IconContainer>
                <Icon name='maximize' />
            </IconContainer>
        </Header>

        {items && items.map((item) => {
            return (
                <KanbanCard 
                    status={item.attributes.status}
                    cardType="candidates"
                    adminId={item.relationships.assignedTo.data?.id}
                    providerId={item.relationships.provider.data?.id}
                    
                />
            )
        })
        }

    </StyledKanbanColumn>
  )
};

KanbanColumn.propTypes = {
    status: PropTypes.string,
    items: PropTypes.arrayOf([PropTypes.object]),
    kanbanType: PropTypes.oneOf(['service', 'candidates'])
};

export default KanbanColumn;

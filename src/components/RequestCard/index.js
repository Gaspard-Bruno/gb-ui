import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from 'Components/Layout';

import Badge from 'Components/Badge';
import Icon from 'Components/Icon';
import Avatar from 'Components/Avatar';

import StyledRequestCard, { 
    Status,
    BadgeContainer,
    Details,
    DateDetails,
    IconContainer } from './style';

const RequestCard = ({
    lead,
    listPosition
}) => {
    return (
        <StyledRequestCard listPosition={listPosition}>
            <Row>
                <Col size={4} display="flex" alignItems="center">
                    <Status>
                        <BadgeContainer>
                            <Badge text={lead.status} status={lead.status}/>
                        </BadgeContainer>
                        {lead.serviceName && <span>{lead.serviceName}</span>}
                    </Status>
                </Col>

                <Col size={3} display="flex" alignItems="center">
                    <Details>
                        <p>Cliente: {lead.client && <span>{lead.client.fullName}</span>}</p>
                        <p>Esp.55: {lead.provider && <span>{lead.provider.fullName}</span>}</p>
                    </Details>
                </Col>

                <Col size={3} display="flex" alignItems="center">
                    {lead.recurrent
                    ?
                        <DateDetails>
                            <IconContainer>
                                <Icon name="repeat" />
                            </IconContainer>
                            <span>Recorrente</span>
                        </DateDetails>                           
                    :
                        <DateDetails>
                            {lead.deliveryDate && 
                                <>
                                    <IconContainer>
                                        <Icon name="calendar" />
                                    </IconContainer>
                                    {lead.deliveryDate && <span>{lead.deliveryDate}</span>}
                                </>
                            }

                        </DateDetails>
                    }
                </Col>

                <Col size={2}>
                    <Avatar size="small" hasText={true} user={lead.admin}/>
                </Col>
            </Row>
        </StyledRequestCard>
    )
}


export default RequestCard;
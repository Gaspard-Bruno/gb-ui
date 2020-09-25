import React from "react";
import PropTypes from "prop-types";

import { useTranslate } from 'polyglot-react-redux-sdk';

import Badge from 'Components/Badge';
import Icon from 'Components/Icon';
import Avatar from 'Components/Avatar';
import { Link, SmallBody } from 'Components/Text';

import StyledKanbanCard, { 
  BadgeContainer,
  Details,
  IconContainer,
  AdminContainer,
  ServiceDetails,
  Recurrent
} from "./style";

const KanbanCard = ({
  status,
  service,
  client,
  provider,
  admin,
  recurrent,
  cardType,
}) => {
  const t = useTranslate('requests');

  const testAdmin = {
    fullName: "Elena"
  }

  console.log("rahrahrah", admin)

  return (
    <StyledKanbanCard

    >
      <BadgeContainer>
        <Badge text={status} status={status}/>
      </BadgeContainer>

      <Link>
        {cardType === 'candidates' 
          ?
            provider?.attributes.fullName
          :
            service?.attributes.name
        }
      </Link>

      {cardType === 'candidates' 
        ?
          <div>
            {provider?.attributes.serviceList && 
              <Details>
                <IconContainer>
                  <Icon name='tool-1'/>
                </IconContainer>

                <SmallBody>
                  {provider?.attributes.serviceList}
                </SmallBody>
              </Details>
            }

            {provider?.attributes.district &&
              <Details>
                <IconContainer>
                  <Icon name='map-pin'/>
                </IconContainer>

                <SmallBody>
                  {provider?.attributes.district}
                </SmallBody>          
              </Details>
            }
          </div>
        :
          <div>
            {client &&
              <ServiceDetails><span>{t('client')}:  </span>{client.attributes.fullName}</ServiceDetails>
            }
            {provider &&
              <ServiceDetails><span>{t('specialist')}:  </span>{provider.attributes.fullName}</ServiceDetails>
            }
            {recurrent &&
              <Recurrent>

              </Recurrent>
            }

          </div>
      }


      {admin &&
        <AdminContainer>
          <Avatar user={admin?.attributes} size="small" hasText={true}></Avatar>
        </AdminContainer>
      }

    </StyledKanbanCard>
  )
};

KanbanCard.propTypes = {
  status: PropTypes.string,
  serviceId: PropTypes.string,
  clientId: PropTypes.string,
  providerId: PropTypes.string,
  adminId: PropTypes.string,
  recurrent: PropTypes.bool,
  cardType: PropTypes.oneOf(['requests', 'candidates']),
  serviceList: PropTypes.string
};

export default KanbanCard;

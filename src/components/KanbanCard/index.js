import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';

import { useTranslate } from 'polyglot-react-redux-sdk';

import { selectors as clientsSelectors} from 'redux/clients';
import { selectors as servicesSelectors} from 'redux/services';
import { selectors as providersSelectors} from 'redux/providers';
import { selectors as adminsSelectors} from 'redux/admin';

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
  serviceId,
  clientId,
  providerId,
  adminId,
  recurrent,
  cardType,
}) => {
  const t = useTranslate('requests');

  const makeClient = useMemo(clientsSelectors.makeGetClient, [])
  const client = useSelector((state) => makeClient(state, clientId))

  const makeService = useMemo(servicesSelectors.makeGetService, [])
  const service = useSelector((state) => makeService(state, serviceId))

  const makeProvider = useMemo(providersSelectors.makeGetProvider, [])
  const provider = useSelector((state) => makeProvider(state, providerId))

  const makeAdmin = useMemo(adminsSelectors.makeGetAdmin, [])
  const admin = useSelector((state) => makeAdmin(state, adminId))

  const testAdmin = {
    fullName: "Elena"
  }
  console.log(status, serviceId, clientId, providerId, adminId, recurrent, cardType)
  console.log(recurrent)

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
            {provider?.attributes?.serviceList && 
              <Details>
                <IconContainer>
                  <Icon name='tool-1'/>
                </IconContainer>

                <SmallBody>
                  {provider?.attributes.serviceList}
                </SmallBody>
              </Details>
            }

            {provider?.attributes?.district &&
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
  serviceList: PropTypes
};

export default KanbanCard;

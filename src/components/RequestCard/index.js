import React from "react";
import PropTypes from "prop-types";

import { useTranslate } from "polyglot-react-redux-sdk";

import useFetchProvider from 'hooks/fetchProvider.js'

import { Col } from "Components/Layout";

import Badge from "Components/Badge";
import Icon from "Components/Icon";
import Avatar from "Components/Avatar";

import StyledRequestCard, {
  Status,
  BadgeContainer,
  Details,
  DateDetails,
  IconContainer
} from "./style";

const RequestCard = ({ lead, appointment, listPosition }) => {
  const t = useTranslate("requests");

  let providerId;
  if (appointment) {
    providerId = appointment.relationships.provider.data.id;

  }
  const provider = useFetchProvider("1")
  console.log("91284udjjduj3~~~~~", provider)


  return (
    <StyledRequestCard listPosition={listPosition}>
      <Col size={4} justify="center">
        <Status>
          <BadgeContainer>
            <Badge text={lead.status} status={lead.status} />
          </BadgeContainer>
          {lead.serviceName && <span>{lead.serviceName}</span>}
        </Status>
      </Col>

      <Col size={3} justify="center">
        <Details>
          <p>
            {t("client")}: {lead.client && <span>{lead.client.fullName}</span>}
          </p>
          <p>
            {t("specialist")}:{" "}
            {lead.provider && <span>{lead.provider.fullName}</span>}
          </p>
        </Details>
      </Col>

      <Col size={3} justify="center">
        {lead.recurrent ? (
          <DateDetails>
            <IconContainer>
              <Icon name="repeat" />
            </IconContainer>
            <span>{t("recurring")}</span>
          </DateDetails>
        ) : (
          <DateDetails>
            {lead.deliveryDate && (
              <>
                <IconContainer>
                  <Icon name="calendar" />
                </IconContainer>
                {lead.deliveryDate && <span>{lead.deliveryDate}</span>}
              </>
            )}
          </DateDetails>
        )}
      </Col>

      <Col size={2}>
        <Avatar size="small" hasText={true} user={lead.admin} />
      </Col>
    </StyledRequestCard>
  );
};

export default RequestCard;

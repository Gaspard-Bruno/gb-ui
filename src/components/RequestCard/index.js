import React from "react";
import PropTypes from "prop-types";

import { useTranslate } from "polyglot-react-redux-sdk";

import useProviders from "Hooks/useProviders.js";
import useClients from "Hooks/useClients.js";
import useServices from "Hooks/useServices";
import useAdmin from "Hooks/useAdmin.js";

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

const RequestCard = ({
  lead,
  appointment,
  provider,
  client,
  admin,
  service,
  listPosition
}) => {
  console.log(service);
  const t = useTranslate("requests");

  return (
    <StyledRequestCard listPosition={listPosition}>
      <Col size={4} justify="center">
        <Status>
          <BadgeContainer>
            <Badge
              text={appointment?.attributes.status}
              status={appointment?.attributes.status}
            />
          </BadgeContainer>
          {service?.name && <span>{service?.name}</span>}
        </Status>
      </Col>

      <Col size={3} justify="center">
        <Details>
          <p>
            {t("client")}: {client && <span>{client?.fullName}</span>}
          </p>
          <p>
            {t("specialist")}:{" "}
            {provider ? <span>{provider?.fullName}</span> : <span></span>}
          </p>
        </Details>
      </Col>

      <Col size={3} justify="center">
        {appointment?.attributes.recurrent ? (
          <DateDetails>
            <IconContainer>
              <Icon name="repeat" />
            </IconContainer>
            <span>{t("recurring")}</span>
          </DateDetails>
        ) : (
          <DateDetails>
            {appointment?.attributes.deliveredOn && (
              <>
                <IconContainer>
                  <Icon name="calendar" />
                </IconContainer>
                {appointment?.attributes.deliveredOn && (
                  <span>
                    {new Date(
                      appointment?.attributes.deliveredOn
                    ).toLocaleDateString()}
                  </span>
                )}
              </>
            )}
          </DateDetails>
        )}
      </Col>

      <Col size={2}>
        {admin ? (
          <Avatar size="small" hasText={true} user={admin} />
        ) : (
          <div></div>
        )}
      </Col>
    </StyledRequestCard>
  );
};

RequestCard.propTypes = {
  appointment: PropTypes.object,
  providerId: PropTypes.string,
  clientId: PropTypes.string,
  adminId: PropTypes.string,
  serviceId: PropTypes.string,
  listPosition: PropTypes.string
};

RequestCard.defaultProps = {
  listPosition: "middle"
};

export default RequestCard;

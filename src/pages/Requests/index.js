import React, { useState, useRef, useMemo } from "react";

import CONFIG from "Config";
import { useTranslate } from "polyglot-react-redux-sdk";

import useAppointments from "Hooks/useAppointments";
import useProviders from "Hooks/useProviders.js";
import useClients from "Hooks/useClients.js";
import useServices from "Hooks/useServices";
import useAdmin from "Hooks/useAdmin.js";

import { BackofficeContainer } from "Components/Layout";
import TopBar from "Components/TopBar";
import RequestCard from "Components/RequestCard";
import Kanban from "Components/Kanban";
import FilterBar from "Components/FilterBar";

const STATUS_COLUMNS = CONFIG.boards.requests.columns;
const admin = {
  fullName: "Elena"
};

const Requests = () => {
  const filters = [
    {
      label: "responsible",
      value: "todo"
    },
    {
      label: "date",
      value: "todo"
    },
    {
      label: "service",
      value: "todo"
    },
    {
      label: "status",
      value: "todo"
    }
  ];

  const t = useTranslate("requests");

  const { providers } = useProviders();
  const { clients } = useClients();
  const { services } = useServices();
  const { admins } = useAdmin();
  const [isKanban, setIsKanban] = useState(true);
  const handleLayoutChange = () => {
    setIsKanban(!isKanban);
  };

  const { appointments, updateAppointment } = useAppointments();
  const COLUMN_NAMES = new Set(Object.values(STATUS_COLUMNS));
  const kanbanItems = useMemo(
    () =>
      appointments?.map(a => ({
        ...a,
        column: STATUS_COLUMNS[a?.attributes?.status]
      })),
    [appointments]
  );
  const kanbanData = useMemo(
    () => ({
      providers,
      services,
      clients,
      admins
    }),
    [admins, clients, providers, services]
  );

  const filterRef = useRef(null);
  return (
    <>
      <TopBar location={t("services")} title={t("requests")} user={admin} />
      <BackofficeContainer>
        <div ref={filterRef}>
          <FilterBar
            availableFilters={filters}
            showLayout={true}
            layout={isKanban}
            handleLayoutChange={handleLayoutChange}
          />
        </div>
        {isKanban ? (
          <Kanban
            onChangeStatus={updateAppointment}
            kanbanData={kanbanData}
            items={kanbanItems}
            colNames={[...COLUMN_NAMES]}
          />
        ) : (
          // L I S T    V I E W
          <div>
            {appointments &&
              appointments.map((appointment, index) => {
                const listPosition =
                  index === 0
                    ? "top"
                    : (index === appointments.length - 1 && "bottom") ||
                      "middle";

                // provider can be null
                const providerId = appointment.relationships.provider.data
                  ? appointment.relationships.provider.data.id
                  : null;
                // admin can be null
                const adminId = appointment.relationships.admin.data
                  ? appointment.relationships.admin.data.id
                  : null;
                const clientId = appointment.relationships.client.data
                  ? appointment.relationships.client.data.id
                  : null;
                const serviceId = appointment.relationships.service.data
                  ? appointment.relationships.service.data.id
                  : null;
                const provider = providers?.[providerId];
                const client = clients?.[clientId];
                const admin = admins?.[adminId];
                const service = services?.[serviceId];
                return (
                  <RequestCard
                    key={"request" + index}
                    appointment={appointment}
                    provider={provider}
                    client={client}
                    admin={admin}
                    service={service}
                    listPosition={listPosition}
                  />
                );
              })}
          </div>
        )}
      </BackofficeContainer>
    </>
  );
};

export default Requests;

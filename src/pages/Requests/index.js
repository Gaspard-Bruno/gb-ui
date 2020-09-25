import React, { useState, useRef, useEffect } from "react";

import { useTranslate } from "polyglot-react-redux-sdk";

import useAppointments from "Hooks/useAppointments";
import useProviders from "Hooks/useProviders.js";
import useClients from "Hooks/useClients.js";
import useServices from "Hooks/useServices";
import useAdmin from "Hooks/useAdmin.js";

import {
  BackofficeContainer,
  BackofficeKanbanContainer
} from "Components/Layout";
import TopBar from "Components/TopBar";
import RequestCard from "Components/RequestCard";
import KanbanColumn from "Components/KanbanColumn";

import FilterBar from "Components/FilterBar";

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

  const filter = {}
  const { requestAppointments } = useAppointments(null, filter);

  const { providers } = useProviders();
  const { clients } = useClients();
  const { services } = useServices();
  const { admins } = useAdmin();
  const [isKanban, setIsKanban] = useState(true);
  const handleLayoutChange = () => {
    setIsKanban(!isKanban);
  };

  const filterStatus = appointments => {
    const columns = {
      newRequests: [],
      inAnalysis: [],
      pending: [],
      active: [],
      requiresAttention: [],
      closed: [],
      cancelled: []
    };

    requestAppointments.forEach(appointment => {
      switch (appointment.attributes.status) {
        case "received":
          columns.newRequests.push(appointment);
          break;
        case "contact":
          columns.newRequests.push(appointment);
          break;
        case "analysis":
          columns.inAnalysis.push(appointment);
          break;
        case "awaiting_specialist":
          columns.pending.push(appointment);
          break;
        case "awaiting_visit_payment":
          columns.pending.push(appointment);
          break;
        case "awaiting_visit":
          columns.pending.push(appointment);
          break;
        case "awaiting_meeting":
          columns.pending.push(appointment);
          break;
        case "awaiting_service_payment":
          columns.pending.push(appointment);
          break;
        case "awaiting_conclusion":
          columns.active.push(appointment);
          break;
        case "complete":
          columns.closed.push(appointment);
          break;
        case "closed":
          columns.closed.push(appointment);
          break;
        case "cancelled":
          columns.cancelled.push(appointment);
          break;
        case "rejected":
          columns.cancelled.push(appointment);
          break;
        default:
          break;
      }
    });
    return columns;
  };

  const columns = filterStatus(requestAppointments);

  const [filterHeight, setFilterHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const filterRef = useRef(null);
  const updateFilterHeight = () => {
    setFilterHeight(filterRef.current.clientHeight);
    setContainerHeight(226 + filterHeight);
  };
  useEffect(() => {
    updateFilterHeight();
  });

  // const testAppId = 1565;
  // const updateLoading = useSelector(appointmentSelectors.getUpdateAppointmentLoading);
  // const updateError = useSelector(appointmentSelectors.getUpdateAppointmentError);

  // const dispatch = useDispatch();
  // const updateAppointment = useCallback((newStatus, appointmentId) => {
  //   appointmentActions.updateAppointment(dispatch, newStatus, appointmentId);
  // }, [dispatch, appointmentActions.updateAppointment]);

  // updateAppointment("pending", testAppId);

  const kanbanData = {
    providers,
    services,
    clients,
    admins
  };

  return (
    <>
      <TopBar location={t("services")} title={t("requests")} user={admin} />
      <BackofficeContainer>
        <div ref={filterRef}>
          <FilterBar
            availableFilters={filters}
            showLayout={true}
            layout={isKanban}
            updateFilterHeight={updateFilterHeight}
            handleLayoutChange={handleLayoutChange}
          />
        </div>

        {isKanban ? (
          //  K A N B A N   V I E W
          <BackofficeKanbanContainer filterHeight={filterHeight}>
            {columns &&
              Object.keys(columns).map((key, index) => {
                return (
                  <KanbanColumn
                    key={"requestCol" + index}
                    status={key}
                    data={kanbanData}
                    items={columns[key]}
                    kanbanType="requests"
                    containerHeight={containerHeight}
                  />
                );
              })}
          </BackofficeKanbanContainer>
        ) : (
          <div>
            {requestAppointments &&
              requestAppointments.map((appointment, index) => {
                const listPosition =
                  index === 0
                    ? "top"
                    : (index === requestAppointments.length - 1 && "bottom") ||
                      "middle";

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

                const client = clients?.[clientId]?.attributes;
                const provider = providers?.[providerId]?.attributes;
                const admin = admins?.[adminId]?.attributes;
                const service = services?.[serviceId]?.attributes;

                return (
                  <RequestCard
                    key={"request" + index}
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

import React, { useState, useRef, useEffect } from "react";

import { useTranslate } from "polyglot-react-redux-sdk";
import { DragDropContext } from "react-beautiful-dnd";

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

  const kanbanData = {
    providers,
    services,
    clients,
    admins
  };
  console.log("Requests -> kanbanData", kanbanData);

  const onDragEnd = (result, columns) => {
    // if (!result.destination) return;
    const { source, destination } = result;

    console.log("wasssupppp ");
    console.log("source", source, "destination", destination);
    console.log(result.destination);
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
            <DragDropContext onDragEnd={onDragEnd}>
              {columns &&
                Object.keys(columns).map((key, index) => {
                  return (
                    <KanbanColumn
                      key={"requestCol" + index}
                      status={key}
                      items={columns[key]}
                      data={kanbanData}
                      kanbanType="requests"
                      containerHeight={containerHeight}
                    />
                  );
                })}
            </DragDropContext>
          </BackofficeKanbanContainer>
        ) : (
          // L I S T    V I E W
          <div>
            {requestAppointments &&
              requestAppointments.map((appointment, index) => {
                const listPosition =
                  index === 0
                    ? "top"
                    : (index === requestAppointments.length - 1 && "bottom") ||
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

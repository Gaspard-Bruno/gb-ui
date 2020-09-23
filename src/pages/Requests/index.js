import React from "react";

import { useTranslate } from "polyglot-react-redux-sdk";

import useAppointments from "Hooks/useAppointments";
import useProviders from "Hooks/useProviders.js";
import useClients from "Hooks/useClients.js";
import useServices from "Hooks/useServices";
import useAdmin from "Hooks/useAdmin.js";

import { BackofficeContainer } from "Components/Layout";
import TopBar from "Components/TopBar";
import RequestCard from "Components/RequestCard";

import FilterBar from "Components/FilterBar";

const leads = [
  {
    status: "contact",
    serviceName: "Acompanhamento de Crianças",
    client: {
      fullName: "Inês Saraiva"
    },
    provider: {
      fullName: "Joana Madeira"
    },
    recurrent: true,
    deliveryDate: "20 Aug, 2020, 9:00",
    admin: {
      fullName: "Elena"
    },
    totalHours: 2,
    totalPrice: 60.0
  },
  {
    status: "awaiting_payment",
    serviceName: "Acompanhamento de Crianças",
    client: {
      fullName: "Inês Saraiva"
    },
    provider: {
      fullName: "Joana Madeira"
    },
    recurrent: false,
    admin: {
      fullName: "Elena"
    },
    totalHours: 3,
    totalPrice: 30.0
  },
  {
    status: "contact",
    serviceName: "Acompanhamento de Crianças",
    client: {
      fullName: "Inês Saraiva"
    },
    provider: {
      fullName: "Joana Madeira"
    },
    recurrent: false,
    deliveryDate: "20 Aug, 2020, 9:00",
    admin: {
      fullName: "Elena"
    },
    totalHours: 10,
    totalPrice: 120.0
  }
];

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

  const { appointments } = useAppointments();

  const { providers } = useProviders();
  const { clients } = useClients();
  const { services } = useServices();
  const { admins } = useAdmin();
  return (
    <>
      <TopBar location={t("services")} title={t("requests")} user={admin} />
      <BackofficeContainer>
        <FilterBar availableFilters={filters} showLayout={true} />

        {appointments &&
          appointments.map((appointment, index) => {
            let listPosition;
            switch (index) {
              case 0:
                listPosition = "top";
                break;
              case appointments.length - 1:
                listPosition = "bottom";
                break;
              default:
                listPosition = "middle";
                break;
            }

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
            const provider = providers?.[providerId]?.attributes;
            const client = clients?.[clientId]?.attributes;
            const admin = admins?.[adminId]?.attributes;
            const service = services?.[serviceId]?.attributes;
            return (
              <RequestCard
                key={"request" + index}
                lead={leads[0]}
                appointment={appointment}
                provider={provider}
                client={client}
                admin={admin}
                service={service}
                listPosition={listPosition}
              />
            );
          })}
      </BackofficeContainer>
    </>
  );
};

export default Requests;

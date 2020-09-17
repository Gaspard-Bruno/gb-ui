import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux'

import { useTranslate } from 'polyglot-react-redux-sdk';

import useAppointments from 'Hooks/useAppointments';

import { BackofficeContainer } from 'Components/Layout';
import TopBar from 'Components/TopBar';
import RequestCard from 'Components/RequestCard';

import FilterBar from 'Components/FilterBar';
import FilterButton from 'Components/FilterButton';
import IconSwitch from 'Components/IconSwitch';

// import { getServices } from "Redux";

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
  const dispatch = useDispatch()

  const filters = ["responsible", "date", "service", "status"]

  const t = useTranslate("requests");

  const { appointments } = useAppointments();

  return (
    <>
        <TopBar location={t('services')} title={t('requests')} user={admin} />
        <BackofficeContainer>

          <br/>
          <br/>
          <FilterBar availableFilters={filters}/>

          <br/>
          <br/>
            {appointments && appointments.map((appointment, index) => {
                    let listPosition;
                    switch (index) {
                        case 0: listPosition = "top"; break;
                        case (appointments.length - 1): listPosition = "bottom"; break;
                        default: listPosition = "middle"; break;
                    }

                    // provider can be null
                    const providerId = appointment.relationships.provider.data ? appointment.relationships.provider.data.id : null
                    // admin can be null
                    const adminId = appointment.relationships.admin.data ? appointment.relationships.admin.data.id : null

                    return (
                        <RequestCard 
                          lead={leads[0]} 
                          appointment={appointment} 
                          providerId={providerId}
                          clientId={appointment.relationships.client.data?.id}
                          adminId={adminId}
                          serviceId={appointment.relationships.service.data?.id}
                          listPosition={listPosition} 
                        />
                    )
                })
                }
        </BackofficeContainer>
    </>
  );
};

export default Requests;

import React from "react";

import { useTranslate } from "polyglot-react-redux-sdk";

import useProviders from "Hooks/useProviders";

import { BackofficeContainer } from "Components/Layout";
import TopBar from "Components/TopBar";

import FilterBar from 'Components/FilterBar';

import Table from 'Components/Table';
import SpecialistTable from 'Components/SpecialistTable';

import Avatar from 'Components/Avatar';


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
      totalPrice: 60.0,
      totalRequests: 21
    },
    {
      status: "awaiting_payment",
      serviceName: "Jardinagem",
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
      totalPrice: 30.0,
      totalRequests: 3
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
      totalPrice: 120.0,
      totalRequests: 12
    }
  ];

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
  

const admin = {
  fullName: "Elena"
};

const Specialists = () => {
  const t = useTranslate("specialists");

  const { providers } = useProviders();
  console.log("provs", providers)

  return (
    <>
        <TopBar location={t('specialists')} title={t('specialists')} user={admin} />
        <BackofficeContainer>
          <FilterBar availableFilters={filters}/>
            <SpecialistTable 
                items={providers}
            />
            
        </BackofficeContainer>
    </>
  );
};

export default Specialists;

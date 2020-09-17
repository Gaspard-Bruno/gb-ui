import React from 'react';

import { useTranslate } from 'polyglot-react-redux-sdk';

import useClients from 'hooks/useClients';

import { BackofficeContainer } from 'Components/Layout';

import TopBar from 'Components/TopBar';
import FilterBar from 'Components/FilterBar';
import Table from 'Components/Table';
import ClientTable from 'Components/ClientTable';

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

const Clients = () => {
  const t = useTranslate("clients");
  console.log("clients and stuff")

  const { clients } = useClients();
  console.log(clients)

  return (
    <>
        <TopBar location={t('clients')} title={t('clients')} user={admin} />
        <BackofficeContainer>
            <FilterBar availableFilters={filters}/>
            {/* <Table tableType="clients" items={clients}/> */}
            <ClientTable items={clients}/>

        </BackofficeContainer>
    </>
  );
};

export default Clients;

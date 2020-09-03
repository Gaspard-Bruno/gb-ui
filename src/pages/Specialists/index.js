import React from "react";

import { useTranslate } from "polyglot-react-redux-sdk";

import { BackofficeContainer } from "Components/Layout";
import TopBar from "Components/TopBar";

import Table from 'Components/Table';

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



const admin = {
  fullName: "Elena"
};

const Specialists = () => {
  const t = useTranslate("specialists");

  return (
    <>
        <TopBar location={t('specialists')} title={t('specialists')} user={admin} />
        <BackofficeContainer>
            {/* <Table 
                tableType="archive"
                items={leads}
            /> */}

            <Table 
                tableType="specialists"
                items={leads}
            />            
        </BackofficeContainer>
    </>
  );
};

export default Specialists;

import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux'

import { useTranslate } from "polyglot-react-redux-sdk";

import { actions as serviceActions } from 'redux/reducers/services'
import { selectors as servicesSelectors } from 'redux/reducers/services'

import { BackofficeContainer } from "Components/Layout";
import TopBar from "Components/TopBar";
import RequestCard from "Components/RequestCard";

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

  const t = useTranslate("requests");

  const getServices = useCallback(() => dispatch(serviceActions.getServices()), [dispatch])
  const services = useSelector(servicesSelectors.getServices)  
  
  useEffect(() => {
    getServices()
  }, [])  
  console.log(services)



  return (
    <>
        <TopBar location={t('services')} title={t('requests')} user={admin} />
        <BackofficeContainer>
            {leads && leads.map((lead, index) => {
                    let listPosition;
                    switch (index) {
                        case 0: listPosition = "top"; break;
                        case (leads.length - 1): listPosition = "bottom"; break;
                        default: listPosition = "middle"; break;
                    }

                    return (
                        <RequestCard lead={lead} listPosition={listPosition} />
                    )
                })
                }
        </BackofficeContainer>
    </>
  );
};

export default Requests;

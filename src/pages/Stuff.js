import React from "react";

import Sidebar from "Components/Sidebar";
import TopBar from "Components/TopBar";
import MainContainer from "Components/MainContainer";
import RequestCard from "Components/RequestCard";

import ArchiveTable from "Components/ArchiveTable";

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

const Stuff = () => {
  return (
    <div>
      <Sidebar></Sidebar>
      <div></div>
      {/* <MainContainer> */}
        <TopBar location="Pedidos" title="Pedidos" user={admin} />

        {/* {leads && leads.map((lead, index) => {
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
            } */}

        <ArchiveTable items={leads}></ArchiveTable>
      {/* </MainContainer> */}
    </div>
  );
};

export default Stuff;
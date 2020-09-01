import React from "react";

import Sidebar from "Components/Sidebar";
import TopBar from "Components/TopBar";
import MainContainer from 'Components/MainContainer';
import RequestCard from "Components/RequestCard";


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
    }        
];

const admin = {
    fullName: "Elena"
}



const Stuff = () => {

  return (
    <div>
        <Sidebar></Sidebar>
        <div>
            
        </div>
        <MainContainer>
            <TopBar location='Pedidos' title='Pedidos' user={admin}/>

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
        </MainContainer>
    </div>
  );
}

export default Stuff;

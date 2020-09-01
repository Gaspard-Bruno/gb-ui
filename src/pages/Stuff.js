import React from "react";

import Sidebar from "Components/Sidebar";
import TopBar from "Components/TopBar";


const Stuff = () => {
  return (
    <div>
        <Sidebar></Sidebar>
        <div>
            <TopBar location='Pedidos' title='Pedidos' back={true}/>
        </div>
    </div>
  );
}

export default Stuff;

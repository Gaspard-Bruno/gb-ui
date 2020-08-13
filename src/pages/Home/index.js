import React from "react";

import HeaderTab from "./HeaderTab";
import ServicesTab from "./ServicesTab";
import HowItWorksTab from "./HowItWorksTab";
import BecomeSpecilistTab from "./BecomeSpecialistTab";
const Home = () => {
  return (
    <>
      <HeaderTab />
      <ServicesTab />
      <HowItWorksTab />
      <BecomeSpecilistTab />
    </>
  );
};

export default Home;

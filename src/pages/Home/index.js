import React from "react";

import HeaderTab from "./HeaderTab";
import ServicesTab from "./ServicesTab";
import HowItWorksTab from "./HowItWorksTab";
import BecomeSpecilistTab from "./BecomeSpecialistTab";
import Alert from "Components/Alerts";
import { useTranslate } from "polyglot-react-redux-sdk";

const Home = () => {
  const t = useTranslate('alerts')
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

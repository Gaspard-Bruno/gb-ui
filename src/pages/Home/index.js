import React from "react";

import HeaderTab from "./HeaderTab";
import ServicesTab from "./ServicesTab";
import HowItWorksTab from "./HowItWorksTab";
import BecomeSpecilistTab from "./BecomeSpecialistTab";

import Alert from 'Components/Alerts';

const Home = () => {
  return (
    <>
      <HeaderTab />
      <ServicesTab />
      <HowItWorksTab />
      <BecomeSpecilistTab />
      <Alert text="Login Failed. Try Again." alertType="defaultWithCloseX" closeCross={true} iconName="cancel-circle"></Alert>
    </>
  );
};

export default Home;

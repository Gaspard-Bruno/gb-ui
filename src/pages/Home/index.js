import React from "react";

import HeaderTab from "./HeaderTab";
import ServicesTab from "./ServicesTab";
import HowItWorksTab from "./HowItWorksTab";

const Home = () => {
  return (
    <>
      <HeaderTab />
      <ServicesTab />
      <HowItWorksTab />
    </>
  );
};

Home.whyDidYouRender = {
  logOnDifferentValues: true,
  customName: "Home"
};

export default Home;

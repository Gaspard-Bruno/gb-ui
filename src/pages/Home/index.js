import React from "react";

import Header from "./HeaderTab";
import Services from "./ServicesTab";

const Home = () => {
  return (
    <>
      <Header />
      <Services />
    </>
  );
};

Home.whyDidYouRender = {
  logOnDifferentValues: true,
  customName: "Home"
};

export default Home;

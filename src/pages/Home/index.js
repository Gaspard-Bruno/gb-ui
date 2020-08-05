import React from "react";

import Header from "./Header";
import Services from "./Services";

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

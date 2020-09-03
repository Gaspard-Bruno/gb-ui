import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { BackofficePage, Page } from "Components/Layout";
import { Heading } from "Components/Text";
import Logo from "Components/Logo";
import Sidebar from "Components/Sidebar";

const Dashboard = () => {
  return (
    <Page>
      <Sidebar />
      <BackofficePage bg="white">
        <BrowserRouter>
          <Switch>
            <Route
              path={"/dashboard"}
              exact
              render={() => <Logo color="home" />}
            />
            <Route
              path={"/dashboard/requests"}
              exact
              render={() => <Heading>Pedidos</Heading>}
            />
          </Switch>
        </BrowserRouter>
      </BackofficePage>
    </Page>
  );
};

export default Dashboard;

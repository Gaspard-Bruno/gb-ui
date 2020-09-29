import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { BackofficePage, Page } from "Components/Layout";
import Logo from "Components/Logo";
import Sidebar from "Components/Sidebar";

const routes = [];

const Dashboard = () => {
  return (
    <Page>
      <BrowserRouter>
        <Sidebar />
        <BackofficePage bg="white">
          <Switch>
            <Route
              path={"/dashboard"}
              exact
              render={() => <Logo color="home" />}
            />
            {routes.map((route, index) => {
              return (
                <Route
                  key={"boRoute" + index}
                  path={route.path}
                  component={route.component}
                />
              );
            })}
          </Switch>
        </BackofficePage>
      </BrowserRouter>
    </Page>
  );
};

export default Dashboard;

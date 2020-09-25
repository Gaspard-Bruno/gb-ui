import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { BackofficePage, Page } from "Components/Layout";
import Logo from "Components/Logo";
import Sidebar from "Components/Sidebar";

import useAuth from "Hooks/useAuth";

import Archive from "Pages/Archive";
import Requests from "Pages/Requests";
import Specialists from "Pages/Specialists";
import Candidates from "Pages/Candidates";
import Clients from "Pages/Clients";

const routes = [
  { path: "/dashboard/archive", component: Archive },
  { path: "/dashboard/requests", component: Requests },
  { path: "/dashboard/specialists", component: Specialists },
  { path: "/dashboard/candidates", component: Candidates },
  { path: "/dashboard/clients", component: Clients }
];

const Dashboard = () => {
  const { user, gotoSignInPage } = useAuth();

  useEffect(() => {
    if (!user) {
      gotoSignInPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gotoSignInPage, user]);

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
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { BackofficePage, Page } from "Components/Layout";
import Logo from "Components/Logo";
import Sidebar from "Components/Sidebar";

import Archive from 'pages/Archive';
import Requests from 'pages/Requests';
import Specialists from 'pages/Specialists';
import Candidates from 'pages/Candidates';
import Clients from 'pages/Clients';

const routes = [
  { path: "/dashboard/archive", component: Archive },
  { path: "/dashboard/requests", component: Requests },
  { path: "/dashboard/specialists", component: Specialists },
  { path: "/dashboard/candidates", component: Candidates },
  { path: "/dashboard/clients", component: Clients },
];

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
                    path={route.path}
                    component={route.component}
                  />
                )
              })}
            </Switch>
        </BackofficePage>
      </BrowserRouter>
    </Page>
  );
};

export default Dashboard;

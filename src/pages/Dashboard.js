import React, { useState } from "react";
import { useTranslate } from "polyglot-react-redux-sdk";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { BackofficePage, Page } from "Components/Layout";
import { Heading, Link, ErrorText } from "Components/Text";
import TextInput from "Components/TextInput";
import Logo from "Components/Logo";
import Button from "Components/Button";
import Sidebar from "Components/Sidebar";
import useAuth from "Hooks/useAuth";

const Dashboard = () => {
  return (
    <Page>
      <Sidebar />
      <BackofficePage bg="white">
        <BrowserRouter>
          <Switch>
            <Route path={"/dashboard"} exact render={() => <Logo isCenter />} />
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

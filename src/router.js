import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import THEME, { GlobalStyles } from "Theme";
import { ThemeProvider } from "styled-components";

import Sidebar from "Components/Sidebar";
import Components from "Components";
const {
  Avatar,
  Badge,
  Button,
  Card,
  FilterBar,
  FilterButton,
  Form,
  Icon,
  IconSwitch,
  Kanban,
  KanbanColumn,
  KanbanCard,
  Page,
  Row,
  Col,
  BackofficePage,
  BackofficeContainer,
  BackofficeKanbanContainer,
  Logo,
  Pagination,
  RequestCard,
  Search,
  Select,
  Table,
  Tabs,
  Text,
  TextArea,
  TopBar,
  TrackerBox
} = Components;

const components = [
  {
    label: "Avatar",
    props: { user: "Test User" },
    component: props => <Avatar {...props} />
  }
];

const buildPathFromLabel = label => `/${label.toLowerCase()}`;

const Router = () => {
  return (
    <ThemeProvider theme={THEME}>
      <Page>
        <GlobalStyles />
        <BrowserRouter>
          <Sidebar />
          <BackofficePage bg="white">
            <Switch>
              <Route
                path={"/dashboard"}
                exact
                render={() => <Logo color="home" />}
              />
              {components.map((route, index) => {
                return (
                  <Route
                    key={"boRoute" + index}
                    path={buildPathFromLabel(route.label)}
                    component={route.component}
                  />
                );
              })}
            </Switch>
          </BackofficePage>
        </BrowserRouter>
      </Page>
    </ThemeProvider>
  );
};

export default Router;

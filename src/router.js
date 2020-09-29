import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import THEME, { GlobalStyles } from "Theme";
import { ThemeProvider } from "styled-components";

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
  Search,
  Sidebar,
  Select,
  Table,
  Tabs,
  Text,
  TextArea,
  TopBar,
  TrackerBox
} = Components;

const { Heading, SubHeading, Body, Tag } = Text;

const components = [
  {
    label: "Avatar",
    props: { user: { fullName: "Test user" }, hasText: true },
    disabled: false,
    section: "General",
    component: props => <Avatar {...props} />
  }
];

const SECTIONS = {};

const buildPathFromLabel = label => `/${label.toLowerCase()}`;
components.forEach(component => {
  const componentSection = component.section || "Other";
  if (!SECTIONS[componentSection]) {
    SECTIONS[componentSection] = {
      title: componentSection,
      items: []
    };
  }
  SECTIONS[componentSection].items.push({
    ...component,
    route: buildPathFromLabel(component.label)
  });
});

const Router = () => {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyles />
      <BrowserRouter>
        <Row noWrap>
          <Sidebar sidebarSections={SECTIONS} />
          <Page>
            <Row>
              {/*
              <Col>
                <Heading>ChangeTheme</Heading>
              </Col>
              */}
              <Col>
                <Heading>Preview</Heading>
                <Row>
                  <Switch>
                    {components.map((route, index) => {
                      return (
                        <Route
                          key={"ui" + index}
                          path={buildPathFromLabel(route.label)}
                          component={() => route.component(route.props)}
                        />
                      );
                    })}
                    <Route
                      path={"/"}
                      component={() => (
                        <Row>
                          <Col
                            size={2}
                            inlineStyle={`border-right: 2px solid ${THEME.colors.brand.orange};`}
                          >
                            <Heading>
                              Select a component from the sidebar
                            </Heading>
                          </Col>
                        </Row>
                      )}
                    />
                  </Switch>
                </Row>
              </Col>
            </Row>
          </Page>
        </Row>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Router;

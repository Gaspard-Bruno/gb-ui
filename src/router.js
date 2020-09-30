import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import THEME, { GlobalStyles } from 'Theme';
import { ThemeProvider } from 'styled-components';

import {
  Avatar,
  Badge,
  Button,
  Code,
  Card,
  FilterBar,
  FilterButton,
  Form,
  Icon,
  IconSwitch,
  Kanban,
  KanbanColumn,
  KanbanCard,
  media,
  Page,
  Row,
  Col,
  BackofficePage,
  BackofficeContainer,
  BackofficeKanbanContainer,
  Logo,
  Pagination,
  Search,
  Select,
  Sidebar,
  Table,
  Tabs,
  TextArea,
  TopBar,
  TrackerBox,
  Jumbo,
  Heading,
  SubHeading,
  Body,
  SmallBody,
  SmallBodyFAQ,
  Tiny,
  Link,
  ButtonText,
  AlertText,
  AlertTitle,
  ErrorText,
} from 'Components';

const components = [
  {
    label: 'Avatar',
    props: { user: { fullName: 'Test user' }, hasText: true },
    disabled: false,
    section: 'General',
    component: (props) => <Avatar {...props} />,
  },
  {
    label: 'Badge',
    props: [
      { category: 'contact', text: 'Text Badge' },
      { category: 'canceled', text: 'Cancelled' },
    ],
    disabled: false,
    section: 'General',
    component: (props) => <Badge {...props} />,
  },
];

const SECTIONS = {};

const buildPathFromLabel = (label) => `/${label.toLowerCase()}`;
components.forEach((component) => {
  const componentSection = component.section || 'Other';
  if (!SECTIONS[componentSection]) {
    SECTIONS[componentSection] = {
      title: componentSection,
      items: [],
    };
  }
  SECTIONS[componentSection].items.push({
    ...component,
    route: buildPathFromLabel(component.label),
  });
});

const Router = () => {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyles />
      <BrowserRouter>
        <Row noWrap>
          <Sidebar sidebarSections={SECTIONS} isOpenable />
          <Page>
            <Row>
              <Col>
                <Heading>Preview</Heading>
                <Switch>
                  {components.map((route, index) => {
                    return (
                      <Route
                        key={'ui' + index}
                        path={buildPathFromLabel(route.label)}
                        component={() =>
                          Array.isArray(route.props)
                            ? route.props.map((props, i) => (
                                <Row
                                  key={route.label + i}
                                  inlineStyle={`padding-bottom: ${THEME.margin}px;
                                    margin-top: ${THEME.margin}px;
                                    border-bottom: 1px solid ${THEME.colors.grey};`}
                                >
                                  <Row>
                                    <Code>
                                      <Body>Props</Body>
                                      <pre>{JSON.stringify(props)}</pre>
                                    </Code>
                                  </Row>
                                  <Row>{route.component(props)}</Row>
                                </Row>
                              ))
                            : route.component(route.props)
                        }
                      />
                    );
                  })}
                  <Route
                    path={'/'}
                    component={() => (
                      <Row>
                        <Col
                          size={2}
                          inlineStyle={`border-right: 2px solid ${THEME.colors.brand.orange};`}
                        >
                          <Col>
                            <Heading>ChangeTheme</Heading>
                          </Col>
                          <Heading>Select a component from the sidebar</Heading>
                        </Col>
                      </Row>
                    )}
                  />
                </Switch>
              </Col>
            </Row>
          </Page>
        </Row>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Router;

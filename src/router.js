import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import components from 'Config/components';

import THEME, { GlobalStyles } from 'Theme';

import {
  Accordion,
  Page,
  Code,
  Row,
  Col,
  Sidebar,
  Heading,
  SubHeading
} from 'Components';

const SECTIONS = {};

const buildPathFromLabel = label => `/${label.toLowerCase()}`;
components.forEach(component => {
  const componentSection = component.section || 'Other';
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

const extractPreviewProps = ({
  previewComponentOpen,
  previewComponentTitle,
  ...props
}) => props;

const Router = () => {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyles />
      <BrowserRouter>
        <Row noWrap inlineStyle={`overflow: hidden; max-height: 100vh;`}>
          <Sidebar sidebarSections={SECTIONS} isOpenable />
          <Page>
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
                                  <Col size={2}>
                                    <SubHeading>Props</SubHeading>
                                    <Code>
                                      <pre>
                                        {JSON.stringify(
                                          extractPreviewProps(props),
                                          0,
                                          2
                                        )}
                                      </pre>
                                    </Code>
                                  </Col>
                                  <Col size={2}>
                                    <SubHeading>
                                      {props.previewComponentTitle}
                                    </SubHeading>
                                    <Accordion
                                      isOpen={props.previewComponentOpen}
                                      title={`${route.label} Component`}
                                      content={route.component(
                                        extractPreviewProps(props)
                                      )}
                                    />
                                  </Col>
                                </Row>
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
          </Page>
        </Row>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Router;

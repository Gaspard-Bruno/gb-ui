import React from 'react';
import { Switch, Route } from 'react-router-dom';

import components from 'showcase/components';

import { theme55 } from 'Theme';

import {
  Accordion,
  Page,
  Code,
  Row,
  Button,
  Col,
  Heading,
  SubHeading
} from 'Components';
import useTheme from 'Hooks/useTheme';

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

const PreviewPage = ({ toggleTheme }) => {
  return (
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
                          inlineStyle={`padding-bottom: ${theme55.margin}px;
                                    margin-top: ${theme55.margin}px;
                                    border-bottom: 1px solid ${theme55.colors.grey};`}
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
                <Col size={2}>
                  <Col>
                    <Heading>ChangeTheme</Heading>
                  </Col>
                  <Heading>Select a component from the sidebar</Heading>
                  <Button
                    text='Change Theme'
                    type='primary'
                    action={toggleTheme}
                  />
                </Col>
              </Row>
            )}
          />
        </Switch>
      </Col>
    </Page>
  );
};

export default PreviewPage;

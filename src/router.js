import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import FORM from 'Components/utils/form';
import THEME, { GlobalStyles } from 'Theme';

import {
  Accordion,
  Alerts,
  Avatar,
  Badge,
  Button,
  ButtonGroup,
  Card,
  CheckBoxGroup,
  Divider,
  DropDownMenu,
  FilterBar,
  FilterButton,
  Form,
  Icon,
  IconSwitch,
  Kanban,
  KanbanCard,
  KanbanColumn,
  media,
  Page,
  Code,
  Row,
  Col,
  BackofficePage,
  BackofficeContainer,
  BackofficeKanbanContainer,
  GridCol,
  GridRow,
  ReversedColumn,
  FullPage,
  Hero,
  List,
  Loader,
  Logo,
  Pagination,
  RadioButton,
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
  Link,
  Tiny,
  ButtonText,
  AlertTitle,
  AlertText,
  ErrorText,
  SchedulePicker
} from 'Components';

const components = [
  {
    label: 'Avatar',
    props: { user: { fullName: 'Test user' }, hasText: true },
    disabled: false,
    section: 'General',
    component: props => <Avatar {...props} />
  },
  {
    label: 'SchedulePicker',
    props: {
      action: values => console.log(values),
      name: 'Applied-key'
    },
    section: 'General',
    component: props => <SchedulePicker {...props} />
  },
  {
    label: 'Select multi',
    props: {
      options: [
        { label: 'option1', value: 0 },
        { label: 'option2', value: 1 }
      ],
      isMulti: true,
      onChange: vals => alert(JSON.stringify(vals, 0, 2))
    },
    section: 'General',
    component: props => <Select {...props} />
  },
  {
    label: 'Badge',
    props: [
      { category: 'contact', text: 'Text Badge', previewComponentOpen: true },
      { category: 'canceled', text: 'Cancelled', previewComponentOpen: true }
    ],
    disabled: false,
    section: 'General',
    component: props => <Badge {...props} />
  },
  {
    label: 'Form',
    props: [
      {
        previewComponentTitle: 'Become Specialist',
        answers: FORM.specialistFormAnswers,
        questions: FORM.becomeSpecialist.questions
      },
      {
        previewComponentTitle: 'Gardening (Pre-filled) with errors',
        questions: FORM.gardening.questions,
        answers: FORM.gardeningAnswers,
        errors: {
          district: 'required',
          freguesia: 'required'
        }
      },
      {
        previewComponentTitle: 'Chef',
        questions: FORM.chefAtHome.questions,
        errors: {
          district: 'required',
          freguesia: 'required',
          'preferred-hours-start': 'required'
        }
      },
      {
        questions: FORM.repairs.questions,
        previewComponentTitle: 'Repairs'
      },
      {
        previewComponentTitle: 'Music Lessons',
        questions: FORM.musicLessons.questions
      },
      {
        previewComponentTitle: 'Tailoring',
        questions: FORM.sewing.questions
      }
    ],
    section: 'Form',
    component: props => <Form {...props}></Form>
  },
  {
    label: 'ButtonGroup',
    props: {
      list: [
        { value: 0, label: 'S', isSelected: true, disabled: true },
        { value: 1, label: 'T', isSelected: true },
        { value: 2, label: 'Q', isSelected: true },
        { value: 3, label: 'Q', isSelected: true },
        { value: 4, label: 'S', isSelected: true },
        { value: 5, label: 'S', isSelected: true },
        { value: 6, label: 'D', isSelected: false }
      ],
      label: 'Button Group'
    },
    disabled: false,
    section: 'Form',
    component: props => <ButtonGroup {...props} />
  },

  {
    label: 'CheckBoxGroup',
    props: [
      {
        name: 'custom-key-field',
        label: 'check-box',
        list: [
          { question: 'Viola', value: 0, isSelected: false },
          {
            question: 'Piano',
            value: 1,
            isSelected: false
          },
          { question: 'Violino', value: 2, isSelected: false },
          { question: 'Acordeão', value: 3, isSelected: false },
          { question: 'Bateria / Percução', value: 4, isSelected: false },
          { question: 'Flauta', value: 5, isSelected: false },
          { question: 'Outro', value: 6, isSelected: false }
        ],
        action: values => alert(JSON.stringify(values, 0, 2))
      }
    ],
    disabled: false,
    section: 'Form',
    component: props => <CheckBoxGroup {...props} />
  }
];

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

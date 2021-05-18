import React from 'react';
import FORM from 'Components/utils/form';
/* eslint-disable */
import THEME, { GlobalStyles } from 'Theme';
import {
  Accordion,
  Avatar,
  Badge,
  Button,
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
  StarsRating,
  FileUploader,
  TextInput
} from 'Components';

const components = [
  {
    label: 'Form ~ Settings',
    section: 'Form',

    disabled: false,
    props: {
      previewComponentTitle: 'Settings',
      questions: FORM.settingsSchema.questions,
      onSubmit: vals => {
        localStorage.setItem('SETTINGS', JSON.stringify(vals));
      },
      answers: JSON.parse(localStorage.getItem('SETTINGS')) || {},
    },
    component: props => <Form {...props}></Form>,
  },
  {
    label: 'Avatar',
    props: { user: { fullName: 'Test user' }, hasText: true },
    disabled: false,
    section: 'General',
    component: props => <Avatar {...props} />
  },
  {
    label: 'TextInput Date',
    props: {
      error: 'error',
      defaultValue: '22/12/2021',
      type: 'date'
    },
    section: 'General',
    component: props => <TextInput {...props} />
  },
  {
    label: 'Pagination',
    section: 'General',
    props: {
      action: () => console.log('cenas')
    },
    component: props => <Pagination {...props}></Pagination>
  },
  {
    label: 'TopBar',
    section: 'General',
    props: {
      user: {
        attributes: {
          avatar: '#000',
          avatarDefault: 'blue',
          location: 'non- settings',
          title: 'non-settings',
          fullName: 'David Morais'
        }
      }
    },
    component: props => <TopBar {...props}></TopBar>
  },
  {
    label: 'FileUploader',
    props: {
      action: values => console.log(values),
      name: 'file'
    },
    section: 'General',
    component: props => (
      <FileUploader
        answers={[
          {
            id: 17,
            filename: 'image_0.jpg',
            url:
              'https://d3ugqbne3wd6hp.cloudfront.net/0a0oss295xf5ibg83fw1q0pljpzw'
          },
          {
            id: 16,
            filename: 'image_1.jpg',
            url:
              'https://d3ugqbne3wd6hp.cloudfront.net/0a0oss295xf5ibg83fw1q0pljpzw'
          }
        ]}
      />
    )
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
    label: 'Stars Rating',
    section: 'Account',
    component: props => <StarsRating {...props} />,
    props: [
      { defaultRating: 3, isInteractive: false },
      {
        defaultRating: 2,
        isInteractive: true,
        labels: ['Nada satisfeito', 'Extremamente Satisfeito']
      },
      {
        defaultRating: 2.5,
        isInteractive: true
      },
      {
        defaultRating: 2.4,
        isInteractive: true
      },
      {
        defaultRating: 2.6  ,
        isInteractive: true
      }
    ]
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

export default components;

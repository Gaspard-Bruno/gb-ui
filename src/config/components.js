import React from 'react';
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
  SchedulePicker,
  FileUploader,
  TextInput
} from 'Components';

const components = [
  {
    label: 'Test Select overflow',
    props: {
      options: [
        { label: 'Test user', value: 0 },
        { label: 'Test user', value: 0 },
        { label: 'Test user', value: 0 },
        { label: 'Test user', value: 0 }
      ]
    },
    disabled: false,
    section: 'General',
    component: props => (
      <>
        <Accordion title='Select' content={<Select {...props} />} />
        <Accordion title='Scheduler' content={<SchedulePicker />} />
      </>
    )
  },
  {
    label: 'Avatar',
    props: { user: { fullName: 'Test user' }, hasText: true },
    disabled: false,
    section: 'General',
    component: props => <Avatar {...props} />
  },
  {
    label: 'TextInput',
    props: {
      error: 'cenas',
      hasIcon: true,
      onChange: () => console.log('dsad')
    },
    section: 'General',
    component: props => <TextInput {...props} />
  },
  {
    label: 'SchedulePicker',
    props: {
      value: {
        monday: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
        saturday: [9, 10, 11, 12, 13, 14, 15, 16],
        sunday: [9, 10, 11, 12, 13, 14, 15, 16],
        friday: [],
        thursday: [],
        tuesday: [],
        wednesday: [9, 10, 11, 12, 13, 14, 15, 16]
      },
      action: values => console.log('action values', values),
      name: 'Applied-key'
    },
    section: 'General',
    component: props => <SchedulePicker {...props} />
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
    label: 'Form',
    props: [
      {
        onSubmit: vals => console.log('submitting', vals),
        previewComponentTitle: 'Become Specialist',
        answers: FORM.specialistFormAnswers,
        questions: FORM.becomeSpecialist.questions,
        isDisabled: true,
        errors: {
          instruments: 'required'
        }
      },
      {
        previewComponentTitle: 'Gardening (Pre-filled) with errors',
        questions: FORM.gardening.questions,
        hiddenFields: ['district'],
        answers: { ...FORM.gardeningAnswers, district: 'Outro' },
        errors: {
          'week-select': 'required',
          'pack-selection': 'required',
          'offer-type': 'required',
          district: 'required',
          freguesia: 'required',
          'number-of-hours': 'required',
          'preferred-hours-start': 'required'
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
        previewComponentTitle: 'Repairs',
        answers: FORM.repairsAnswers
      },
      {
        previewComponentTitle: 'Music Lessons',
        questions: FORM.musicLessons.questions
      },
      {
        previewComponentTitle: 'Tailoring',
        questions: FORM.sewing.questions
      },
      {
        previewComponentTitle: 'Pet Sitting',
        questions: FORM.petsitting.questions,
        answers: FORM.petSittingAnswers
      }
    ],
    section: 'Form',
    component: props => <Form {...props}></Form>
  },
  {
    label: 'ButtonGroup',
    props: {
      list: [
        { value: 0, label: 'S', isSelected: true },
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

export default components;

import React, { useRef } from 'react';
import { Field, Formik } from 'formik';
import PropTypes from 'prop-types';
import chunk from 'lodash.chunk';
import sc from 'lodash.startcase';

import TextInput from 'Components/TextInput';
import Select from 'Components/Select';
import TextArea from 'Components/TextArea';
import Accordion from 'Components/Accordion';
import CheckBoxGroup from 'Components/CheckBoxGroup';
import ButtonGroup from 'Components/ButtonGroup';
import RadioButton from 'Components/RadioButton';
import Tabs from 'Components/Tabs';
import Button from 'Components/Button';
import { Tiny, Heading } from 'Components/Text';
import { Col, Row } from 'Components/Layout';

import { StyledForm } from './styles';

const MiniForm = ({ onSubmit, content, title }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <Heading size={3}>{title}</Heading>
      {content}
      <Button type='submit' btnType={'primary'} text='Submit' />
    </StyledForm>
  );
};

MiniForm.propTypes = {
  onSubmit: PropTypes.func,
  title: PropTypes.string,
  content: PropTypes.func
};

export default MiniForm;

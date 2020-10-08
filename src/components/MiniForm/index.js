import React from 'react';
import PropTypes from 'prop-types';

import Button from 'Components/Button';
import { Heading } from 'Components/Text';
import { Col, Row } from 'Components/Layout';

import { StyledForm } from './styles';

const MiniForm = ({ onSubmit, content, title, onRemove }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <Row>
        <Col size={1}>
          <Heading size={3}>{title}</Heading>
        </Col>
        <Col size={1}>
          <Button
            type='submit'
            action={onRemove}
            btnType='terceary'
            text='Remove'
            icon='Close'
          />
        </Col>
      </Row>
      {content}
      <Button type='submit' btnType={'primary'} text='Submit' />
    </StyledForm>
  );
};

MiniForm.propTypes = {
  onSubmit: PropTypes.func,
  onRemove: PropTypes.func,
  title: PropTypes.string,
  content: PropTypes.func
};

export default MiniForm;

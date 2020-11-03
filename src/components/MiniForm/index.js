import React from 'react';
import PropTypes from 'prop-types';

import { Col } from '../Layout';

import {
  StyledForm,
  StyledHeaderInfo,
  StyledServiceHeader,
  StyledRemoveSpan
} from './styles';

const MiniForm = ({ onSubmit, content, title, onRemove }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledServiceHeader>
        <StyledHeaderInfo size={6}>{title}</StyledHeaderInfo>
        <StyledRemoveSpan key={title} role='presentation' onClick={onRemove}>
          X Remover Serviço
        </StyledRemoveSpan>
      </StyledServiceHeader>
      <Col padding={20}>{content}</Col>
      {/*  <Button type='submit' btnType={'primary'} text='Submit' /> */}
    </StyledForm>
  );
};

MiniForm.propTypes = {
  onSubmit: PropTypes.func,
  title: PropTypes.string,
  onRemove: PropTypes.func,
  content: PropTypes.array
};

export default MiniForm;

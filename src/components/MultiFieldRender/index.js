import React from 'react';
import PropTypes from 'prop-types';
import { Row } from '../Layout';
import Button from '../Button';
import { StyledAddItem, StyledContentContainer } from './style';
const MultiFieldRender = ({ label, content, addAction, removeAction }) => {
  return (
    <>
      <StyledContentContainer>
        {content}
        {content && content.length ? (
          <Button type='button' icon='trash' action={removeAction} />
        ) : null}
      </StyledContentContainer>
      <Row>
        <StyledAddItem onClick={addAction} role='presentation'>
          {label}
        </StyledAddItem>
      </Row>
    </>
  );
};

MultiFieldRender.propTypes = {
  label: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  addAction: PropTypes.func,
  removeAction: PropTypes.func
};
export default MultiFieldRender;

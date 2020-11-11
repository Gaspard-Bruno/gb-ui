import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'components/Layout';
import Button from 'components/Button';
import { StyledAddItem, StyledContentContainer } from './style';
const MultiFieldRender = ({ label, content, addAction, removeAction }) => {
  return (
    <StyledContentContainer>
      {content}
      {content && content.length ? (
        <Button
          type='button'
          icon='trash'
          btnType='iconHolder'
          action={removeAction}
        />
      ) : null}
      <Row>
        <StyledAddItem onClick={addAction} role='presentation'>
          {label}
        </StyledAddItem>
      </Row>
    </StyledContentContainer>
  );
};

MultiFieldRender.propTypes = {
  label: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  addAction: PropTypes.func,
  removeAction: PropTypes.func
};
export default MultiFieldRender;

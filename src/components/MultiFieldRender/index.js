import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'components/Layout';
import Button from 'components/Button';
import { StyledAddItem } from './style';
const MultiFieldRender = ({ label, content, addAction, removeAction }) => {
  return (
    <Col>
      <Row>
        <StyledAddItem onClick={addAction} role='presentation'>
          {label}
        </StyledAddItem>
      </Row>
      <Row>
        {content}
        {content && content.length ? (
          <Button
            type='button'
            icon='trash'
            btnType='iconHolder'
            action={removeAction}
          />
        ) : null}
      </Row>
    </Col>
  );
};

MultiFieldRender.propTypes = {
  label: PropTypes.string,
  content: PropTypes.oneOf(PropTypes.func, PropTypes.node),
  addAction: PropTypes.func,
  removeAction: PropTypes.func
};
export default MultiFieldRender;

import React from 'react';
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
      {content}
      <Button
        type='button'
        icon='trash'
        btnType='iconHolder'
        action={removeAction}
      />
    </Col>
  );
};
export default MultiFieldRender;

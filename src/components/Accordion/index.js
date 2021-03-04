import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Heading } from '../Text';
import Button from '../Button';
import { AccordionContainer, AccordionTitle, ContentContainer } from './style';
import { useEffect } from 'react';

const Accordion = ({ title, isOpen, content, action }) => {
  const [setOpen, setSetOpen] = useState(isOpen);
  const handleChangeState = () => {
    setSetOpen(!setOpen);
    if (action) action(!setOpen);
  };

  useEffect(() => {
    if (isOpen !== setOpen) {
      setSetOpen(isOpen);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);
  return (
    <AccordionContainer>
      <AccordionTitle isOpen={setOpen}>
        <Heading size={6}>{title}</Heading>
        <Button
          type='button'
          btnType='transparent'
          icon='chevron-down'
          action={handleChangeState}
        />
      </AccordionTitle>
      <ContentContainer isOpen={setOpen}>{content}</ContentContainer>
    </AccordionContainer>
  );
};

Accordion.propTypes = {
  title: PropTypes.string,
  content: PropTypes.func,
  action: PropTypes.func,
  isOpen: PropTypes.bool
};

// Accordion.whyDidYouRender = {
//   customName: 'Accordion'
// };
export default Accordion;

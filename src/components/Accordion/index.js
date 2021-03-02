import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Heading } from '../Text';
import Button from '../Button';
import { AccordionContainer, AccordionTitle, ContentContainer } from './style';

const Accordion = ({ title, isOpen, content }) => {
  const [setOpen, setSetOpen] = useState(isOpen);
  return (
    <AccordionContainer>
      <AccordionTitle isOpen={setOpen}>
        <Heading size={6}>{title}</Heading>
        <Button
          btnType='transparent'
          icon='chevron-down'
          action={() => setSetOpen(!setOpen)}
        />
      </AccordionTitle>
      <ContentContainer isOpen={setOpen}>{content}</ContentContainer>
    </AccordionContainer>
  );
};

Accordion.propTypes = {
  title: PropTypes.string,
  content: PropTypes.func,
  isOpen: PropTypes.bool
};

Accordion.whyDidYouRender = {
  customName: 'Accordion'
};
export default Accordion;

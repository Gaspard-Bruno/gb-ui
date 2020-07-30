import React, { useState } from "react";
import PropTypes from "prop-types";

import { Heading } from "Components/Text";
import Button from "Components/Button";
import { AccordionContainer, AccordionTitle, ContentContainer } from "./style";

const Accordion = ({ title, isOpen, content }) => {
  const [setOpen, setSetOpen] = useState(isOpen);
  console.log(setOpen);
  return (
    <AccordionContainer>
      <AccordionTitle isOpen={setOpen}>
        <Heading size={6}>{title}</Heading>
        <Button
          icon={"chevron-down"}
          action={() => setSetOpen(!setOpen)}
        ></Button>
      </AccordionTitle>
      <ContentContainer isOpen={setOpen}>{content()}</ContentContainer>
    </AccordionContainer>
  );
};

Accordion.propTypes = {
  title: PropTypes.string,
  content: PropTypes.element,
  isOpen: PropTypes.bool
};
export default Accordion;

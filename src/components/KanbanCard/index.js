import React from "react";
import PropTypes from "prop-types";
import StyledKanbanCard from "./style";

const KanbanCard = ({
  justify,
  padding,
  align,
  hasBoxShadow,
  bg,
  text,
  customStyle,
  children
}) => (
  <StyledKanbanCard
    justify={justify}
    align={align}
    boxShadow={hasBoxShadow}
    padding={padding}
    customStyle={customStyle}
    bg={bg}
    text={text}
  >
    {children}
  </StyledKanbanCard>
);

KanbanCard.propTypes = {
  justify: PropTypes.string,
  padding: PropTypes.number,
  align: PropTypes.string,
  customStyle: PropTypes.func,
  hasBoxShadow: PropTypes.bool,
  bg: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  text: PropTypes.string
};

export default KanbanCard;

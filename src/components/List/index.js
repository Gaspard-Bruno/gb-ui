import React from "react";
import { ListContainer, ListItens } from "./styles";
import { Body } from "Components/Text";
import PropTypes from "prop-types";

const List = props => {
  const { data, options, defaultList } = props;
  const { list, display } = options;

  const items =
    data &&
    data.map((item, index) => {
      return (
        <ListItens key={`${item}-${index}`} list={list}>
          <Body>{item}</Body>
        </ListItens>
      );
    });
  return defaultList ? (
    <ListContainer display={display}>{items}</ListContainer>
  ) : null;
};

List.prototype = {
  defaultList: PropTypes.bool,
  data: PropTypes.array,
  options: PropTypes.objectOf(
    PropTypes.shape({
      list: PropTypes.string,
      display: PropTypes.string
    })
  )
};

export default List;

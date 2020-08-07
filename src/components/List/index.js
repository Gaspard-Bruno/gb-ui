import React from "react";
import { ListContainer, ListItens, itemIcon } from "./styles";
import { Body } from "Components/Text";
import Icon from "Components/Icon";
import PropTypes from "prop-types";

const List = ({ data, hasIcon }) => {
  const items =
    data &&
    data.map((item, index) => {
      return (
        <ListItens hasIcon key={`${item}-${index}`}>
          <Body>{item}</Body>
        </ListItens>
      );
    });
  return <ListContainer>{items}</ListContainer>;
};

List.prototype = {
  hasIcon: PropTypes.bool,
  data: PropTypes.array,
  options: PropTypes.objectOf(
    PropTypes.shape({
      list: PropTypes.string,
      display: PropTypes.string
    })
  )
};

export default List;

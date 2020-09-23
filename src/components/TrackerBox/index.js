import React from "react";
import PropTypes from "prop-types";

import { Tiny } from "Components/Text";
import Icon from "Components/Icon";
import StyledTracker from "./style";

const TrackerBox = ({
  text,
  currentPage,
  totalPages,
  iconName,
  isActive,
  boxType,
  action
}) => {
  const handleClick = () => {
    switch (boxType) {
      case "last":
        if (currentPage > 1) {
          action(currentPage - 1);
        }
        break;
      case "ellipsis":
        break;
      case "next":
        if (currentPage !== totalPages) {
          action(currentPage + 1);
        }
        break;
      default:
        action(text);
        break;
    }
  };

  return (
    <StyledTracker
      isActive={isActive}
      onClick={e => handleClick(e, text, currentPage)}
      type={boxType}
    >
      {text ? <Tiny>{text}</Tiny> : <Icon name={iconName} />}
    </StyledTracker>
  );
};

TrackerBox.propTypes = {
  text: PropTypes.string,
  iconName: PropTypes.string,
  isActive: PropTypes.bool,
  currentPage: PropTypes.number,
  totalPage: PropTypes.number,
  boxType: PropTypes.oneOf(["single", "ellipsis", "last", "next"]),
  action: PropTypes.func
};

export default TrackerBox;

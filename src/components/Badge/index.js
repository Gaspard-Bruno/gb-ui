import React from "react";
import PropTypes from "prop-types";
import { SmallBody } from "Components/Text";
import Icon from "Components/Icon";
import StyledBadge from "./style";
import { useTranslate } from "polyglot-react-redux-sdk";

const Badge = ({ status = "active", category, isChip, onClick, text }) => {
  const t = useTranslate("badges");
  return (
    <StyledBadge onClick={onClick} status={category || status} chip={isChip}>
      <SmallBody>{t(text)}</SmallBody>
      {isChip && <Icon name="Close" size={12} />}
    </StyledBadge>
  );
};

Badge.propTypes = {
  onClick: PropTypes.func,
  status: PropTypes.string,
  category: PropTypes.string,
  isChip: PropTypes.bool,
  text: PropTypes.string
};

export default Badge;

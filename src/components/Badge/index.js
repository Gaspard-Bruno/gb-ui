import React from "react";
import { SmallBody } from "Components/Text";
import StyledBadge from "./style";

const Badge = ({ status = "active", chip, text }) => {
  return (
    <StyledBadge status={status} chip={chip}>
      <SmallBody>{text}</SmallBody>
    </StyledBadge>
  );
};

export default Badge;

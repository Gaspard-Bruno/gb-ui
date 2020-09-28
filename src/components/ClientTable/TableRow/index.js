import React from "react";

import { Col } from "Components/Layout";
import Avatar from "Components/Avatar";

import { StyledTableRow } from "./style";

const TableRow = ({ item }) => {
  return (
    <StyledTableRow>
      <Col size={9}>
        {item.attributes && (
          <Avatar size="small" hasText={true} user={item.attributes} />
        )}
      </Col>

      <Col size={3}></Col>
    </StyledTableRow>
  );
};

export default TableRow;

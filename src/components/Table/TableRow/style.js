import styled from "styled-components";

export const StyledTableRow = styled.div`
  display: flex;
  align-items: center;
  font-weight: normal;
  border-bottom: 1px solid ${props => props.theme?.colors.alt};

  .service {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${props => props.theme?.colors?.brand?.main};
  }
`;

export default StyledTableRow;

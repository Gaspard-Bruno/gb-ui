import styled from "styled-components";

export const StyledTableRow = styled.div`
  display: flex;
  align-items: center;
  font-weight: normal;
  height: 80px;
  border-bottom: 1px solid ${props => props.theme.colors.mediumBeige};

  .service {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${props => props.theme.colors.brand.orange};
  }
`;

export default StyledTableRow;

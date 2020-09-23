import styled from "styled-components";

const StyledPagination = styled.div`
  margin: 24px 0px 32px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  p {
    color: ${props => props.theme.colors.grey};
  }
`;

export const Right = styled.div`
  display: flex;
`;
export default StyledPagination;

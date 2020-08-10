import styled from "styled-components";

export const SubHeaderContainer = styled.div`
  text-align: center;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  & > div {
    width: 368px;
    height: 264px;
    margin-right: 16px;
    margin-top: 56px;
    border-radius: 10px;
  }
`;

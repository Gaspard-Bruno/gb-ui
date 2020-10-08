import styled from 'styled-components';

export const Line = styled.div`
  display: flex;
  margin-top: 0;
  width: 100%;
  margin-right: 20%;
  margin-top: 10%;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${({ color }) => color};
`;

import styled from "styled-components";

export const ListContainer = styled.ul`
  padding: 0;
  list-style: none;
`;

export const ListItens = styled.li`
  counter-increment: liCounter;
  display: flex;
  margin-bottom: 0.5rem;
  font-family: Space Grotesk;
  font-style: normal;
  font-weight: bold;
  align-items: center;
  ${props => (props.hasIcon ? iconStyle : "")}
`;

const iconStyle = `
    &::before {
      width: 15px;
      height: 15px;
      padding: 10px;
      content: "" counter(liCounter);
      font-weight: bold;
      font-size: 16px;
      margin-right: 1.5rem;
      font-family: "Abril Fatface",serif;
      color: white;
      background: #F0513A;
      border-radius: 2px;
      text-align: center;
    }
`;

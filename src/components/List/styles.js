import styled from "styled-components";

export const ListContainer = styled.ul`
  padding: 0;
`;

export const ListItens = styled.li`
  counter-increment: liCounter;
  display: flex;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  ${(props) => (props.hasIcon ? iconStyle : "")}
`;

const iconStyle = `
    &::before {
      content: "" counter(liCounter);
      font-weight: bold;
      font-size: 3rem;
      margin-right: 1.5rem;
      font-family: "Abril Fatface", serif;
      color: white;
      background: red;
    }
`;

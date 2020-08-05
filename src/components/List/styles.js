import styled from "styled-components";

export const ListContainer = styled.ul`
  display: ${props => (props.display ? props.display : "block")};
`;

export const ListItens = styled.li`
  list-style: ${props => (props.list ? props.list : "none")};
`;

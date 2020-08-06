import styled from "styled-components";

export const ListContainer = styled.ul`
  display: ${props => (props.display ? props.display : "block")};
`;

export const ListItens = styled.li`
  list-style: ${props => (props.list ? props.list : "none")};
  &:hover {
    background-color: : ${props => (props.list ? "red" : "transparent")};
  }
`;

export const itemIcon = styled.nav`
  background-color: : ${props => (props.list ? "red" : "transparent")};
`;

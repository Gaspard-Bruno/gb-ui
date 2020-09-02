import Card from "Components/Card";
import styled from "styled-components";

export const LoginCard = styled(Card)`
  min-width: 311px;
  background-color: blue !important;
  flex-flow: row nowrap;
  input {
    margin-bottom: ${props => props.theme.margin}px;
  }
`;

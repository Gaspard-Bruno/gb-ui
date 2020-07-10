import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  padding: 0;
  input,
  button {
    border: 1px solid ${props => props.theme.mediumBeige};
  }
`;

const Input = styled.input`
  flex: 3;
  border-radius: 48px 0 0 48px;
  color: ${props => props.theme.colors.grey};
  padding: ${props => props.theme.margin * 1.5}px
    ${props => props.theme.margin * 2.6}px;
`;
const Button = styled.button`
  border-radius: 0 48px 48px 0;
  outline: none !important;
  background-color: ${props => props.theme.colors.main.yellow};
  padding: ${props => props.theme.margin * 1.5}px
    ${props => props.theme.margin * 2.6}px;
  flex: 1;
`;

export { Input, Button, Container };

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  padding: 0;
  input {
    border: 1px solid ${props => props.theme.mediumBeige};
  }
`;

const Input = styled.input`
  flex: 3;
  border-radius: 48px 0 0 48px;
  color: ${props => props.theme.colors.grey};
  padding: 0 ${props => props.theme.margin * 1.5}px;
  &:focus {
    outline: none;
  }
  font-family: Muli;
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme.grey};
`;
const Button = styled.button`
  border-radius: 0 48px 48px 0;
  outline: none !important;
  background-color: ${props => props.theme.colors.brand.yellow};
  border: none;
  padding: 0 ${props => props.theme.margin * 1}px;
  flex: 1;
  > p {
    margin: ${props => props.theme.margin}px;
  }
`;

export { Input, Button, Container };

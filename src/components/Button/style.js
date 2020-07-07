import styled from "styled-components";

const Button = styled.button`
  border-radius: 40px;
  outline: none;
  padding: ${(props) =>
      props.small ? props.theme.margin * 0.75 : props.theme.margin}px
    ${(props) => props.theme.margin * 4}px;

  background-color: ${(props) =>
    props.type === "primary"
      ? props.theme.colors.main.yellow
      : props.theme.colors.white};

  border: ${(props) =>
    props.type === "secondary"
      ? `1px solid ${props.theme.colors.main.yellow}`
      : "transparent"};

  > * {
    margin: 0 auto;
  }
`;

export default Button;

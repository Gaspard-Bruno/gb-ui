import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  color: ${props =>
    props.error
      ? props.theme.colors.feedback.error.default
      : props.theme.colors.darkBlue};
  > p {
    margin: ${props => props.theme.margin / 2}px 0;
  }
`;

const Input = styled.input`
  border-radius: 2px;
  padding: ${props => props.theme.margin}px ${props => props.theme.margin / 2}px;
  border-color: ${props =>
    props.error ? props.theme.colors.mediumBeige : props.theme.colors.darkBlue};
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  outline: none;
  &:focus {
    outline: none;
    background-color: red;
    border-radius: 2px;
    border-color: ${props =>
      props.error
        ? props.theme.colors.feedback.error.default
        : props.theme.colors.darkBlue};
  }
`;

export default Input;

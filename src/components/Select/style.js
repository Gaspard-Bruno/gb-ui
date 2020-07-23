import styled from "styled-components";

export const SelectContainer = styled.div`
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
export const SelectOption = styled.option`
  width: 100%;
  color: ${props => props.theme.colors.darkBlue};
  background-color: ${props => props.theme.colors.white};
`;

const Select = styled.select`
  border-radius: 2px;
  min-width: 150px;
  height: 48px;
  resize: none;
  border: 1px solid
    ${props =>
      props.error
        ? props.theme.colors.feedback.error.default
        : props.theme.colors.mediumBeige};
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  outline: none;
  color: ${props => props.theme.colors.darkBlue};
  &:focus {
    outline: none;
    border-radius: 2px;
    border-color: ${props =>
      props.error
        ? props.theme.colors.feedback.error.default
        : props.theme.colors.darkBlue};
  }
  &:disabled {
    background-color: ${props => props.theme.colors.lightBeige};
    color: ${props => props.theme.colors.grey};
  }
  option:hover {
    color: red;
    background-color: ${props => props.theme.colors.lightBeige};
    box-shadow: 0 0 10px 100px red inset;
  }
`;

export default Select;

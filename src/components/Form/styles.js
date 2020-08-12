import styled from "styled-components";
const getSelectedBackground = props => {
  switch (props.bg) {
    case "alt":
      return props.theme.colors.lightBeige;
    case "secondary":
      return props.theme.colors.brand.yellow;
    case "terceary":
      return props.theme.colors.brand.lightBlue;
    default:
      return props.theme.colors.white;
  }
};

export const FormContainer = styled.div`
  background-color: ${props => getSelectedBackground(props)};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin 0px 175px;
  button {
    align-self: center;
    width: 368px;
height: 48px;
    margin-bottom: 20px;
    margin-top: 25px;
  }
`;

export const StyledForm = styled.form`
  div {
    padding: 20px;
  }
`;

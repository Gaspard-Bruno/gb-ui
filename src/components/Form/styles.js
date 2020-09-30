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
      return props.bg;
  }
};

export const FormContainer = styled.div`
  background-color: ${props => getSelectedBackground(props)};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 616px;
  text-align: center;
  div {
    padding: ${props => props.theme.margin}px 0;
  }
  button {
    align-self: center;
    margin: ${props => props.theme.margin}px 0;
  }
`;

export const StyledForm = styled.form`
  div {
    padding: 10px;
    & > textarea {
      min-height: 161px;
    }
    & > p {
      text-align: left;
    }
  }
`;

import styled from "styled-components";
const getSelectedBackground = props => {
  switch (props.bg) {
    case "alt":
      return props.theme?.colors.lightBeige;
    case "secondary":
      return props.theme?.colors.brand.yellow;
    case "terceary":
      return props.theme?.colors.brand.lightBlue;
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
  width: 100%;
  button {
    align-self: center;
    margin: ${props => props.theme?.margin}px 0;
  }
`;

export const StyledForm = styled.form`
  flex: 1;
  display: flex;
  flex-flow: column;
  > h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-align: left;
  }
  > div {
    & > textarea {
      min-height: ${props => props.theme?.margin * 4}px;
    }
    & > p {
      text-align: left;
    }
  }
`;

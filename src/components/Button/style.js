import styled from "styled-components";

const getStyleFromBtnType = (type = "primary", theme) => {
  switch (type) {
    case "primary":
      return `
        background-color: ${theme.colors.brand.yellow};
        border: transparent;
        &:hover {
          background-color: ${theme.colors.brand.lighter};
        }
      `;
    case "secondary":
      return `
        background-color: transparent;
        border: 1px solid ${theme.colors.brand.yellow};
        &:hover {
          border: transparent;
          background-color: ${theme.colors.brand.lighter};
        }
      `;
    case "terceary":
      return `
        background-color: ${theme.colors.brand.orange};
        border: transparent;
        &:hover {
          border: transparent;
          background-color: ${theme.colors.brand.orangeLight};
        }
      `;
    default:
      break;
  }
};
const Button = styled.button`
  border-radius: 40px;
  outline: none;
  padding: ${props =>
      props.small ? props.theme.margin * 0.75 : props.theme.margin}px
    ${props => props.theme.margin * 2}px;
  ${props => getStyleFromBtnType(props.btnType, props.theme)}
  > * {
    margin: 0 auto;
  }
  &:hover {
    cursor: pointer;
  }
`;

export default Button;

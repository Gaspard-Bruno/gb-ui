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
    case "transparent":
      return `
        background-color: transparent;
        border: transparent;
        &:hover {
          border: transparent;
          background-color: transparent;
        }
        > span {
          color: ${theme.colors.brand.orange};
          &:hover {
            color: ${theme.colors.brand.orangeDarker};
          }
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
    props.small ? props.theme.margin * 0.75 : props.theme.margin}px;
  ${props => getStyleFromBtnType(props.btnType, props.theme)}
  > * {
    margin: 0 auto;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const IconButton = styled.button`
  border-radius: 50%;
  outline: none;
  padding: ${props => props.theme.margin}px;
  ${props => getStyleFromBtnType(props.btnType, props.theme)} > * {
    margin: 0 auto;
  }
  &:hover {
    cursor: pointer;
  }
`;

export default Button;

import styled from 'styled-components';

const getStyleFromBtnType = (type = 'primary', disabled, theme) => {
  if (disabled) {
    return `
      background-color: ${theme.colors.lightBeige};
      border: transparent;
      color: ${theme.colors.grey};
      &:hover {
        cursor: default;
      }
    `;
  }
  switch (type) {
    case 'primary':
      return `
        border: 1px solid transparent;
        background-color: ${theme.colors?.brand?.alt};
        &:hover {
          background-color: ${theme.colors.brand.mainLight};
        }
      `;
    case 'secondary':
      return `
        background-color: ${theme.colors.white};
        border: 1px solid ${theme.colors?.brand?.alt};
        &:hover {
          border: 1px solid transparent;
          background-color: ${theme.colors.brand.mainLight};
        }
      `;
    case 'terceary':
      return `
        background-color: ${theme.colors?.brand?.main};
        border: transparent;
        &:hover {
          border: transparent;
          background-color: ${theme.colors?.brand?.mainLight};
        }
      `;
    case 'transparent':
      return `
        background-color: transparent;
        border: transparent;
        > span {
          color: ${theme.colors?.brand?.main};
          &:hover {
            color: ${theme.colors?.brand?.mainDarker};
          }
        }
      `;
    case 'borded':
      return `
        border: 1px solid ${theme.colors?.brand?.alt};
        box-sizing: border-box;
        border-radius: 100px;
        background-color: ${theme.colors.white};
        > span {
          color: ${theme.colors.brand.darkBlue};
          &:hover {
            color: ${theme.colors?.brand?.mainDarker};
          }
        }
      `;
    case 'resting':
      return `
        background-color: ${theme.colors.alt};
        border: 1px solid transparent;
        > span {
          color: ${theme.colors.grey};
        }
      `;
    case 'active':
      return `
        background-color: ${theme.colors.alt};
        border: 1px solid transparent;
        > span {
          color: ${theme.colors?.brand?.main};
          &:hover {
            color: ${theme.colors?.brand?.mainDarker};
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
  width: ${props => (props.fullWidth ? '244px' : '')};
  margin-top: ${props => (props.fullWidth ? '20px' : '')};
  margin-bottom: ${props => (props.fullWidth ? '20px' : '')};
  padding: ${props =>
    props.small ? props.theme.margin * 0.75 : props.theme.margin}px;
  > * {
    margin: 0 auto;
  }
  &:hover {
    cursor: pointer;
  }
  ${props => getStyleFromBtnType(props.btnType, props.disabled, props.theme)}
`;

const getIconStyle = (btnType, theme) => {
  switch (btnType) {
    case 'borded':
      return `
        border: 1px solid ${theme.colors?.brand?.alt};
        padding: 8px;
      `;

    default:
      break;
  }
};

export const IconButton = styled.button`
  border-radius: 50%;
  padding: ${props => props.theme.margin}px;
  ${props =>
    getStyleFromBtnType(props.btnType, props.disabled, props.theme)} > * {
    margin: 0 auto;
  }
  &:hover {
    cursor: pointer;
  }
  ${props => getIconStyle(props.btnType, props.theme)}
`;

export default Button;

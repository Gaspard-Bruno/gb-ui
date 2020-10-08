import styled from 'styled-components';

const getStyleFromBtnType = (type = 'primary', theme) => {
  switch (type) {
    case 'primary':
      return `

        background-color: ${theme?.colors.brand.yellow};
        border: transparent;
        &:hover {
          background-color: ${theme?.colors.brand.lighter};
        }
      `;
    case 'secondary':
      return `
        background-color: transparent;
        border: 1px solid ${theme?.colors.brand.yellow};
        &:hover {
          border: transparent;
          background-color: ${theme?.colors.brand.lighter};
        }
      `;
    case 'terceary':
      return `
        background-color: ${theme?.colors.brand.orange};
        border: transparent;
        &:hover {
          border: transparent;
          background-color: ${theme?.colors.brand.orangeLight};
        }
      `;
    case 'transparent':
      return `
        background-color: transparent;
        border: transparent;
        > span {
          color: ${theme?.colors.brand.orange};
          &:hover {
            color: ${theme?.colors.brand.orangeDarker};
          }
        }
      `;
    case 'borded':
      return `
        border: 1px solid ${theme?.colors.brand.yellow};
        box-sizing: border-box;
        border-radius: 100px;
        background-color: ${theme?.colors.white};
        > span {
          color: ${theme?.colors.brand.darkBlue};
          &:hover {
            color: ${theme?.colors.brand.orangeDarker};
          }
        }
      `;
    case 'iconHolder':
      return `
        border: 1px solid ${theme?.colors.brand.yellow};
        box-sizing: border-box;
        border-radius: 100px;
        padding: 20px;
        width: 40px;
        height: 40px;
        background-color: ${theme?.colors.white};
        > svg {
          position: relative;
          right: 11px;
          bottom: 12px;
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
    props.small ? props.theme?.margin * 0.75 : props.theme?.margin}px;
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
  width: 32px;
  height: 32px;
  > svg {
    margin-top: 0 !important;
  }
  ${props => getStyleFromBtnType(props.btnType, props.theme)} > * {
    margin: 0 auto;
  }
  &:hover {
    cursor: pointer;
  }
`;

export default Button;

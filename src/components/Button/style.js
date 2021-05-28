import styled from 'styled-components';
import get from 'lodash.get';

const getSelectedColor = props => {
  return get(props.theme?.colors, props.color, props.color);
};
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
        background-color: ${theme.colors?.brand?.main};
        > span {
          color: ${theme.colors.white};
        }
        &:hover {
          background-color: ${theme.colors.brand.mainLight};
        }
      `;
    case 'secondary':
      return `
        background-color: ${theme.colors.alt};
        border: 1px solid ${theme.colors?.brand?.alt};
        span {
          color: ${theme.colors.background};
        }
        &:hover {
          border: 1px solid transparent;
          background-color: ${theme.colors.brand.altLight};
          span {
            color: ${theme.colors.background};
          }
        }
      `;
    case 'terceary':
      return `
        background-color: ${theme.colors?.text};
        border: transparent;
        span {
          color: ${theme.colors.background};
        }
        &:hover {
          border: transparent;
          background-color: ${theme.colors?.text};
          span {
            color: ${theme.colors.background};
          }
        }
      `;
    case 'transparent':
      return `
        background-color: transparent;
        border: transparent;
        > span {
          color: ${theme.colors?.brand?.main};
          &:hover {
            color: ${theme.colors?.brand?.main};
          }
        }
      `;
    default:
      break;
  }
};

const addStyleProps = props => `
  ${getStyleFromBtnType(props.variant, props.disabled, props.theme)}
  ${props.textColor &&
    `
  > span {
    color: ${getSelectedColor({ ...props, color: props.textColor })};
  }`}
    ${props.borderColor &&
      `
  border: 1px solid ${getSelectedColor({ ...props, color: props.borderColor })};
  `}
    ${props.bgColor &&
      `
    background: ${getSelectedColor({ ...props, color: props.bgColor })};
  }`}
  ${({ hoverStyles, ...props }) =>
    hoverStyles &&
    `
    &:hover {
      ${
        hoverStyles.bgColor
          ? `background: ${getSelectedColor({
              ...props,
              color: hoverStyles.bgColor
            })};`
          : ''
      }
      ${
        hoverStyles.borderColor
          ? `border: 1px solid ${getSelectedColor({
              ...props,
              color: props.borderColor
            })};`
          : ''
      }
      ${
        hoverStyles.textColor
          ? `> span {
              color: ${getSelectedColor({
                ...props,
                color: props.textColor
              })};
          }`
          : ''
      }
  `}`;

const Button = styled.button`
  border-radius: 40px;
  outline: none;
  width: ${props => (props.fullWidth ? '244px' : '')};
  margin-top: ${props => (props.fullWidth ? '20px' : '')};
  margin-bottom: ${props => (props.fullWidth ? '20px' : '')};
  padding: ${props =>
    props.small ? props.theme.margin * 0.25 : props.theme.margin}px;
  > * {
    margin: 0 auto;
  }
  &:hover {
    cursor: pointer;
  }
  ${props => addStyleProps(props)}
`;

export const IconButton = styled.button`
  border-radius: 50%;
  padding: ${props => props.theme.margin}px;
  ${props =>
    getStyleFromBtnType(props.variant, props.disabled, props.theme)} > * {
    margin: 0 auto;
  }
  &:hover {
    cursor: pointer;
  }

  ${props => addStyleProps(props)}
`;

export default Button;

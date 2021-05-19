import styled from 'styled-components';
import { media } from '../Layout';
import theme from 'Theme';

export const ListWrapper = styled.div`
  white-space: pre-line;
  padding: ${props => (props.padding ? props.padding : 0)}px;
  border: ${props =>
    props.isBorded
      ? `1px solid ${props.theme?.colors.brand?.altLight}`
      : 'none'};
  box-sizing: ${props => (props.isBorded ? 'border-box' : 'none')};
  border-radius: ${props => (props.isBorded ? '10px' : 'none')};
`;

export const ListContainer = styled.ul`
  padding: 0px;
`;

export const ListItens = styled.li`
  & > div {
    flex: ${props => (props.hasFullWidthLi ? 1 : '')};
  }
  div {
    ${media.tablet(`flex: 1; padding: 0px;`)}
  }
  display: flex;
  margin-bottom: 0.5rem;
  font-family: Space Grotesk;
  font-style: normal;
  font-weight: bold;
  align-items: ${props => (props.hasIcon ? 'center' : 'baseline')};
  justify: ${props => (props.justify ? props.justify : 'center')};
  ${props =>
    props.hasIcon && props.indexedList
      ? getIconStyle(props.indexedStyle, props.indexedList)
      : props.hasIcon
      ? getIconStyle('main')
      : regularStyle}
`;

const getIconStyle = (style, isIndexed) => {
  const customStyles = {
    main: `
    nav {
      width: 20px;
      height: 20px;
      padding: 2px;
      font-weight: bold;
      font-size: 16px;
      margin-right: ${theme?.margin}px;
      color: white;
      background: ${theme?.colors?.brand?.orange};
      border-radius: 2px;
      text-align: center;«
    }
    p {
      color: ${isIndexed && theme?.colors?.brand?.orange};
    }
    `,
    completed: `
    nav {
      width: 20px;
      height: 20px;
      padding: 2px;
      font-weight: bold;
      font-size: 16px;
      margin-right: ${theme?.margin}px;
      color: white;
      background: ${theme?.colors.text};
      border-radius: 2px;
      text-align: center;
    }
    p {
      color: ${theme?.colors.text}
    }
    `,
    grey: `
    nav {
      width: 20px;
      height: 20px;
      padding: 2px;
      font-weight: bold;
      font-size: 16px;
      margin-right: ${theme?.margin}px;
      color: white;
      background: ${theme?.colors.grey};
      border-radius: 2px;
      text-align: center;«
    }
    p {
      color: ${theme?.colors.grey}
    }`
  };
  return customStyles[style];
};

const regularStyle = `
  &::before {
      content: "";
      padding: 5px;
      font-weight: bold;
      font-size: 16px;
      align-items: baseline;
      margin-right: 1.5rem;
      background: ${theme?.colors?.brand?.orange};
      border-radius: 2px;
  }
  `;

export const StyledIcon = styled.nav``;

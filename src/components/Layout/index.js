import styled from 'styled-components';
import get from 'lodash.get';

const media = {
  mobile: styles => `
    @media only screen and (min-width: 200px) and (max-width: 767px) {
      ${styles}
    }
  `,
  tablet: styles => `
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      ${styles}
    }
  `,
  smallDesktop: styles => `
    @media only screen and (max-width: 1024px) {
      ${styles}
    }
  `,
  desktop: styles => `
    @media only screen and (min-width: 1024px) {
      ${styles}
    }
  `
};
const getSelectedBackground = props => {
  return get(props.theme?.colors, props.bg, props.bg);
};

const getPageBackground = props => {
  switch (props.bg) {
    case 'white':
      return props.theme?.colors.white;
    case 'main':
      return props.theme?.colors?.brand?.main;
    case 'contrast':
      return props.theme?.colors?.text;
    case 'bg':
      return props.theme?.colors.background;
    default:
      return getSelectedBackground(props);
  }
};
const setMarginFromProps = props => {
  const { margin, marginVertical, marginHorizontal } = props;
  let style = '';
  if (margin) {
    style += `
      margin: ${margin};
    `;
  }
  if (marginVertical) {
    style += `
    margin-bottom: ${marginVertical}px;
    margin-top: ${marginVertical}px;
    `;
  }
  if (marginHorizontal) {
    style += `
    margin-left: ${marginHorizontal}px;
    margin-right: ${marginHorizontal}px;
    `;
  }
  return style;
};
const Code = styled.div`
  flex-flow: row nowrap;
  max-width: 600px;
  display: flex;
  > pre {
    max-height: 50vh;
    overflow-y: scroll;
    padding: 16px;
    background: ${props => props.theme?.colors.mainGradient};
    color: ${props => props.theme?.colors.main}ff;
  }
`;

const Page = styled.div`
  background-color: ${props =>
    props.bg ? getPageBackground(props) : props.theme?.colors.background};
  min-height: 50vh;
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
  margin-left: ${props => props.theme?.margin * 2}px;
  overflow: auto;

  &::-webkit-scrollbar {
    margin-top: 32px;
    height: 4px;
    background-color: ${props =>
      props.scrollBackground
        ? getSelectedBackground({ ...props, bg: props.scrollBackground })
        : props.theme?.colors.brand?.altLight};
  }

  &::-webkit-scrollbar-thumb {
    margin-top: 30px;
    background-color: ${props =>
      props.scrollColor
        ? getSelectedBackground({ ...props, bg: props.scrollColor })
        : props.theme?.colors.brand?.altDarker};
    border-radius: 30px;
  }
`;

const KanbanContainer = styled.div`
  display: flex;
  max-height: calc(70vh);
  overflow-x: scroll;
  overflow-y: hidden;
  padding-bottom: 40px;
  transition: height 0.3s ease-out;

  > * {
    margin-right: 16px;
  }

  &::-webkit-scrollbar {
    margin-top: 32px;
    height: 4px;
    background-color: ${props => props.theme?.colors.brand?.altLight};
  }

  &::-webkit-scrollbar-thumb {
    margin-top: 30px;
    background: ${props => props.theme?.colors.brand.altDarker};
    border-radius: 30px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-flow: row ${props => (props.noWrap ? 'nowrap' : 'wrap')};
  background-color: ${props =>
    props.bg ? getSelectedBackground(props) : 'transparent'};
  align-items: ${props => (props.align ? props.align : 'none')};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  justify-content: ${props => (props.justify ? props.justify : 'none')};
  ${props => (props.size ? `flex: ${props.size}` : '')};
  ${props =>
    props.collapse &&
    media[props.collapse](`
      display: none;
  `)}
  ${props => setMarginFromProps(props)}
  ${props => props?.inlineStyle?.(props.theme) || ''}
`;

const Col = styled.div`
  ${props => (props.size ? `flex: ${props.size}` : '')};
  display: flex;
  flex-flow: column nowrap;
  background-color: ${props =>
    props.bg ? getSelectedBackground(props) : 'transparent'};
  align-items: ${props => (props.align ? props.align : 'none')};
  justify-content: ${props => (props.justify ? props.justify : 'none')};
  padding: ${props => props.padding ?? props.theme?.margin}px;
  ${props =>
    props.collapse &&
    media[props.collapse](`
  display: none;
  `)}
    ${props => setMarginFromProps(props)}
  ${props => props.center && 'margin: 0 auto;'}
  ${props => props.inlineStyle?.(props.theme) || ''}
`;

export { media, Page, Row, Col, Code, KanbanContainer };

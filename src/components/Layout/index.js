import styled from 'styled-components';

const media = {
  mobile: styles => `
    @media only screen and (max-width: 375px) {
      ${styles}
    }
  `,
  tablet: styles => `
    @media only screen and (max-width: 768px) {
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
const getPageBackground = props => {
  switch (props.bg) {
    case 'white':
      return props.theme.colors.white;
    case 'orange':
      return props.theme.colors.brand.orange;
    default:
      return props.theme.colors.white;
  }
};

const Code = styled.div`
  flex-flow: row nowrap;
  max-width: 60%;
  > pre {
    max-height: 30vh;
    padding: 16px;
    background-color: ${props => props.theme.colors.mediumBeige}ff;
  }
`;

const Page = styled.div`
  background-color: ${props => getPageBackground(props)};
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
  margin-left: ${props => props.theme.margin * 2}px;
  overflow: auto;

  &::-webkit-scrollbar {
    margin-top: 32px;
    height: 4px;
    background-color: ${props => props.theme.colors.lightestBeige};
  }

  &::-webkit-scrollbar-thumb {
    margin-top: 30px;
    background: ${props => props.theme.colors.darkBlue};
    border-radius: 30px;
  }
`;
const BackofficePage = styled.div`
  background-color: ${props => getPageBackground(props)};
  height: 100vh;
  width: calc(100vw - 240px);
  margin-left: 240px;
`;

const BackofficeContainer = styled.div`
  margin: 0px 32px;
`;

const BackofficeKanbanContainer = styled.div`
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
    background-color: ${props => props.theme.colors.lightestBeige};
  }

  &::-webkit-scrollbar-thumb {
    margin-top: 30px;
    background: ${props => props.theme.colors.darkBlue};
    border-radius: 30px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-flow: row ${props => (props.noWrap ? 'nowrap' : 'wrap')};
  background-color: ${props => getSelectedBackground(props)};
  align-items: ${props => (props.align ? props.align : 'none')};
  max-width: ${props => props.theme.maxWidth || 100}%;
  width: 100%;
  justify-content: ${props => (props.justify ? props.justify : 'none')};
  min-height: ${props => props.theme.margin * (props.size || 0)}px;
  ${props =>
    (props.margin &&
      `
    ${media.desktop(`
    margin: 0 auto;
  `)}
  ${media.smallDesktop(`
    margin: 0 120px;
  `)}
  ${media.tablet(`
    margin: 0 48px;
  `)}
  ${media.mobile(`
    margin: 0 32px;
  `)}
  `) ||
    'margin: 0 auto;'}
  ${props => props.inlineStyle || ''}
`;

const Col = styled.div`
  flex: ${props => props.size || 1};
  display: flex;
  flex-flow: column nowrap;
  align-items: ${props => (props.center ? 'center' : 'flex-start')};
  justify-content: ${props => (props.justify ? props.justify : 'none')};
  padding: ${props => props.padding ?? props.theme.margin}px;
  ${props =>
    props.collapse &&
    media[props.collapse](`
  display: none;
  `)}
  ${props => props.center && 'margin: 0 auto;'}
  ${props => props.inlineStyle || ''}
  ${props =>
    props.src
      ? `
          background-image: url(${props.src});
          background-size: cover;
          background-position: center;
        `
      : ''}
`;

export {
  media,
  Page,
  Row,
  Col,
  Code,
  BackofficePage,
  BackofficeContainer,
  BackofficeKanbanContainer
};

export const getSelectedBackground = props => {
  switch (props.bg) {
    case 'alt':
      return props.theme.colors.lightBeige;
    case 'secondary':
      return props.theme.colors.brand.yellow;
    case 'terceary':
      return props.theme.colors.brand.lightBlue;
    case 'transparent':
      return 'transparent';
    default:
      return 'transparent';
  }
};

const FullPage = styled.div`
  background-color: ${props => getSelectedBackground(props)};
`;

const GridRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: ${props => getSelectedBackground(props)};
  align-items: ${props => (props.align ? props.align : 'none')};
  justify-content: ${props => (props.justify ? props.justify : 'none')};
  max-width: ${props => props.theme.maxWidth}px;

  ${media.desktop(`
    margin: 0 auto;
  `)}
  ${media.smallDesktop(`
    margin: 0 120px;
  `)}
  ${media.tablet(`
    margin: 0 48px;
  `)}
  ${media.mobile(`
    margin: 0 32px;
  `)}
  ${props =>
    props.collapse &&
    media[props.collapse](`
  display: none;
  `)};
  ${props =>
    props.show &&
    media[props.show](`
  display: initial;
  `)};
`;

const GridCol = styled.div`
  text-align: ${props => (props.text ? 'center' : 'left')};
  width: ${props => `${(100 * props.size) / 12}%`};
  align-self: ${props => (props.self ? 'center' : '')};
  justify-content: ${props => (props.justify ? props.justify : 'none')};
  ${props =>
    props.collapse &&
    media[props.collapse](`
  display: none;
  `)};
  ${props =>
    props.show &&
    media[props.show](`
  display: initial;
  `)};
  ${props =>
    props.src
      ? `
          background-image: url(${props.src});
          background-size: ${props.contain ? 'contain' : 'cover'};
          background-position: center;
          background-repeat: no-repeat;
        `
      : ''}
`;

const Hero = styled.div`
  display: flex;
  align-items: center;
  height: ${props => props.theme.heroSize}px;
  background-color: ${props => getSelectedBackground(props)};
  ${props =>
    props.top
      ? `
      position: relative;
      top: -80px;
    `
      : ``}
`;

const ReversedColumn = styled(GridRow)`
  ${media.mobile(`
    flex-flow: column-reverse;
    text-align: center
  `)}
`;

export { GridCol, GridRow, ReversedColumn, FullPage, Hero };

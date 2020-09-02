import styled from "styled-components";

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
    case "white":
      return props.theme.colors.white;
    case "orange":
      return props.theme.colors.brand.orange;
    default:
      return props.theme.colors.white;
  }
};
const Page = styled.div`
  background-color: ${props => getPageBackground(props)};
  min-height: 100vh;
  padding: ${props => props.theme.margin * 2.5}px 0px;
`;

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: ${props => (props.align ? props.align : "none")};
  max-width: ${props => props.theme.maxWidth}px;
  justify-content: ${props => (props.justify ? props.justify : "none")};
  min-height: ${props => props.theme.margin * props.size}px;
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
`;

const Col = styled.div`
  flex: ${props => props.size};
  padding: ${props => props.padding || props.theme.margin}px;
  ${props =>
    props.collapse &&
    media[props.collapse](`
  display: none;
  `)}
  ${props => props.center && "margin: 0 auto;"}
`;

const GridRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: ${props => (props.align ? props.align : "none")};
  justify-content: ${props => (props.justify ? props.justify : "none")};
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
`;

const GridCol = styled.div`
  text-align: ${props => (props.text ? "center" : "left")};
  width: ${props => `${(100 * props.size) / 12}%`};

  ${props => props.center && "margin: 0 auto;"}
  ${props =>
    props.collapse &&
    media[props.collapse](`
  display: none;
  `)};
`;

export { media, Page, Row, Col, GridRow, GridCol };

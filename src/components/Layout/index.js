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
  height: 100vh;
  overflow-x: hidden;
  display: flex;
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
  height: 70vh;  
  overflow-x: scroll;
  overflow-y: hidden;  

  > * {
    margin-right: 16px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: ${props => (props.align ? props.align : "none")};
  max-width: ${props => props.theme.maxWidth}px;
  justify-content: ${props => (props.justify ? props.justify : "none")};
  min-height: ${props => props.theme.margin * props.size}px;
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
    "margin: 0 auto;"}
`;

const Col = styled.div`
  flex: ${props => props.size};
  display: flex;
  flex-flow: column nowrap;
  align-items: ${props => (props.center ? "center" : "flex-start")};
  justify-content: ${props => (props.justify ? props.justify : "none")};  
  padding: ${props => props.padding || props.theme.margin}px;
  ${props =>
    props.collapse &&
    media[props.collapse](`
  display: none;
  `)}
  ${props => props.center && "margin: 0 auto;"}
`;

export { media, Page, Row, Col, BackofficePage, BackofficeContainer, BackofficeKanbanContainer };

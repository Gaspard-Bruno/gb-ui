import styled from "styled-components";

const media = {
  mobile: (styles) => `
    @media only screen and (max-width: 375px) {
      ${styles}
    }
  `,
  tablet: (styles) => `
    @media only screen and (max-width: 768px) {
      ${styles}
    }
  `,
  smallDesktop: (styles) => `
    @media only screen and (max-width: 1024px) {
      ${styles}
    }
  `,
  desktop: (styles) => `
    @media only screen and (max-width: 1440px) {
      ${styles}
    }
  `,
};

const Page = styled.div`
  max-width: ${(props) => props.theme.maxWidth}px;
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
    margin: 0 48px;
  `)}
`;

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  min-height: ${(props) => props.theme.margin * props.size}px;
`;

const Col = styled.div`
  flex: ${(props) => props.size};

  ${(props) =>
    props.collapse &&
    media[props.collapse](`
  display: none;
  `)}
`;

export { media, Page, Row, Col };

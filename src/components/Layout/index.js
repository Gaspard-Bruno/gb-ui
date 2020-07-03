import styled from "styled-components";
import theme from "Theme";

const media = {
  xs: (styles) => `
    @media only screen and (max-width: 480px) {
      ${styles}
    }
  `,
  s: (styles) => `
    @media only screen and (max-width: 576px) {
      ${styles}
    }
  `,
  m: (styles) => `
    @media only screen and (max-width: 768px) {
      ${styles}
    }
  `,
  l: (styles) => `
    @media only screen and (max-width: 992px) {
      ${styles}
    }
  `,
  xl: (styles) => `
    @media only screen and (max-width: 1200px) {
      ${styles}
    }
  `,
};

const Page = styled.div`
  width: calc(100% - ${theme.margin * 2}px);
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
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

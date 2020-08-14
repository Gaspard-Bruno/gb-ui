import styled from "styled-components";

import { GridRow, GridCol } from "Components/Layout";

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.darkBlue};
`;

const Footer = styled(GridRow)`
/*  display: flex;
  flex-flow: row-nowrap;
  margin: 0 auto;
  justify-content: center;
  align-items: flex-start;*/
  padding: ${props => props.theme.margin * 2.5}px 0 ;
  background-color: ${props => props.theme.colors.darkBlue};
  color: ${props => props.theme.colors.white};
/*  align-items: center;*/
  * > a {
    color: ${props => props.theme.colors.white};
    &:visited {
      color: ${props => props.theme.colors.white};
    }
  }
`;

const BottomMargin = styled.div`
  margin-bottom: ${props => props.theme.margin * props.size}px;
`;

const TopMargin = styled.div`
  margin-top: ${props => props.theme.margin * props.size}px;
`;

const FooterText = styled.p`
  color: ${props => props.theme.colors.white};
  font-family: Space Grotesk;
  font-size: 14px;
  line-height: 19px;
`;

const CopyrightText = styled.p`
  color: ${props => props.theme.colors.white};
  font-family: Space Grotesk;
  font-size: 12px;
  line-height: 16px;
  margin-top: ${props => props.theme.margin * 5}px;
`;

const LeftSection = styled(GridCol)`
  a {
    margin-bottom: ${props => props.theme.margin * 3}px;
  }
  p {
    margin-bottom: ${props => props.theme.margin * 0.75}px;
  }
`;
const RightSection = styled(GridCol)`
  display: flex;
  flex-flow: column nowrap;
  align-self: flex-start;
  flex: 0.25;
  > * {
    margin: ${props => props.theme.margin}px;
  }
`;

const FooterBottomLine = styled.div`
  background: linear-gradient(
    to right,
    #c5e8f2 0%,
    #5cb5e6 80%,
    #ffffff 80%,
    #ffffff 100%
  );
`;

const FooterSocialLine = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  margin-left: -5px;
  & > button {
    border: none;
    background-color: ${props => props.theme.colors.darkBlue};
    & > svg > path {
      fill: ${props => props.theme.colors.white};
    }
  }
  justify-content: flex-start;
`;

export {
  FooterContainer,
  Footer as StyledFooter,
  BottomMargin,
  TopMargin,
  FooterText,
  CopyrightText,
  RightSection,
  LeftSection,
  FooterBottomLine,
  FooterSocialLine
};

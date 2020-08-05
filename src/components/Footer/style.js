import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  flex-flow: row-nowrap;
  margin: 0 auto;
  justify-content: center;
  align-items: flex-start;
  padding: ${props => props.theme.margin * 3.5}px;
  background-color: ${props => props.theme.colors.darkBlue};
  color: ${props => props.theme.colors.white};
  align-items: center;
  * > a {
    color: ${props => props.theme.colors.white};
    &:visited {
      color: ${props => props.theme.colors.white};
    }
  }
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

const RightSection = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 0.2;
  a {
    margin-bottom: ${props => props.theme.margin * 3}px;
  }
  p {
    margin-bottom: ${props => props.theme.margin * 0.75}px;
  }
`;
const LeftSection = styled.div`
  display: flex;
  flex-flow: column nowrap;
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

export {
  Footer as StyledFooter,
  FooterText,
  CopyrightText,
  RightSection,
  LeftSection,
  FooterBottomLine
};

import styled from "styled-components";
import { Link, Tiny, ButtonText } from "Components/Text";

const StyledSidebar = styled.div`
  background-color: ${props => props.theme.colors.brand.orange};
  color: white;
  width: 240px;
  height: 100vh;
  > div {
    position: fixed;
  }
  svg {
    margin-top: ${props => props.theme.margin * 2}px;
  }
`;

export const NavHeader = styled(Tiny)`
  text-transform: uppercase;
  margin: 0px 32px 4px;
  color: ${props => props.theme.colors.white};
`;

export const NavSection = styled.div`
  margin-top: 40px;
  a {
    color: white;
    font-size: 16px;
    line-height: 24px;
    &:visited {
      color: white;
    }
  }
`;

const getActiveLinkStyle = (theme, active) => {
  if (!active) {
    return `
      background-color: none;
      border-left: solid 2px transparent;
      `;
  } else {
    return `
      background-color: ${theme.colors.brand.orangeLight};
      border-left: solid 2px white;
      `;
  }
};

export const NavLink = styled(Link)`
  padding: 0px 30px;
  height: 40px;
  display: flex;
  align-items: center;

  ${props => getActiveLinkStyle(props.theme, props.disabled)}
`;
export const NavText = styled(ButtonText)`
  padding: 0px 30px;
  height: 40px;
  display: flex;
  align-items: center;

  ${props => getActiveLinkStyle(props.theme, props.disabled)}
`;

export const LogoContainer = styled.div`
  margin: 30px 0px 80px;
`;

export default StyledSidebar;

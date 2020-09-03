import styled from "styled-components";
import { Link, Tiny } from "Components/Text";

const StyledSidebar = styled.div`
  background-color: ${props => props.theme.colors.brand.orange};
  color: white;
  width: 240px;
  height: 100vh;
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

    &:hover {
      color: white;
      background-color: red;
    }
  }
`;

export const NavLink = styled(Link)`
  padding: 0px 30px;
  height: 40px;
  display: flex;
  align-items: center;

  background-color: ${props =>
    props.active ? props.theme.colors.brand.orangeLight : "none"};
  border-left: ${props =>
    props.active ? "solid 2px white" : "solid 2px transparent"};
`;

export default StyledSidebar;

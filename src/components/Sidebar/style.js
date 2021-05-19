import styled from 'styled-components';
import { Link, Tiny, ButtonText } from '../Text';

const StyledSidebar = styled.div`
  background-color: ${props => props.theme?.colors?.brand?.main};
  color: white;
  transition: width 0.5s linear;
  width: ${props => (props.open ? '240px' : '45px')};
  height: 100vh;
  svg {
    margin-top: ${props => props.theme?.margin}px;
  }
  button svg {
    margin-top: 0;
  }
  > div {
    transition: all 0.5s linear;

    ${props =>
      !props.open
        ? `
    position: fixed;
    left: -240px;
  `
        : `
    position: fixed;
    left: 0px;`}
  }
`;
export const ScrollView = styled.div`
  overflow-y: scroll;
  max-height: 75vh;
`;
export const NavHeader = styled(Tiny)`
  text-transform: uppercase;
  margin-top: ${props => props.theme?.margin * 2};
  color: ${props => props.theme?.colors.white};
`;

export const NavSection = styled.div`
  margin-bottom: ${props => props.theme?.margin * 2}px;
  button {
    transition: all 0.5s;
    svg {
      transition: all 0.5s;
      transform: ${props => (props.open ? 'rotate(180deg)' : 'rotate(0deg)')};
      > path {
        fill: ${props => props.theme?.colors.white};
      }
    }
    ${props =>
      !props.open
        ? `
    position: fixed;
    top: 64px;
    left: 8px;
  `
        : `
    position: fixed;
    top: 64px;
    left: ${240 - 64 - 16}px;
    `}
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
      background-color: ${theme?.colors?.brand?.mainLight};
      border-left: solid 2px white;
      `;
  }
};

export const NavLink = styled(Link)`
  padding: 0px 30px;
  height: 40px;
  display: flex;
  align-items: center;
  color: ${props => props.theme?.colors.white};
  &:visited {
    color: ${props => props.theme?.colors.white};
  }
  ${props => getActiveLinkStyle(props.theme, props.disabled)};
`;
export const NavText = styled(ButtonText)`
  padding: 0px 30px;
  height: 40px;
  display: flex;
  align-items: center;

  color: ${props => props.theme?.colors.white};
  ${props => getActiveLinkStyle(props.theme, props.disabled)}
`;

export default StyledSidebar;

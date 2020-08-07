import styled from "styled-components";

const Navbar = styled.nav`
  display: flex;
  flex-flow: row-nowrap;
  margin: 0 auto;
  justify-content: space-between;
  max-height: 80px;
  align-items: center;
  padding: 0 ${props => props.theme.margin * 2}px;
  max-width: ${props => props.theme.maxWidth}px;
  background-color: ${props => props.theme.colors.white};
  position: sticky;
  top: 0;
  z-index: 10;
  align-items: center;
  ul {
    display: flex;
    flex-flow: row nowrap;
    padding: 0;
    justify-content: flex-start;
    align-items: center;
    li {
      margin-right: ${props => props.theme.margin * 2}px;
      display: block;
    }

    @media only screen and (max-width: 375px) {
      maxwidth: 100%;
    }
  }
`;

const RightSection = styled.ul`
  flex: 0.5;
`;
const LeftSection = styled.ul`
  flex: 0.4;
  li a {
    color: ${props => props.theme.colors.brand.orange} !important;
  }
`;

export { Navbar as StyledNavbar, RightSection, LeftSection };

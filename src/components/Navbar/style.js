import styled from "styled-components";

const Navbar = styled.nav`
  display: flex;
  flex-flow: row-nowrap;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.margin * 1.5}px
    ${(props) => props.theme.margin * 2}px;
  max-width: ${(props) => props.theme.maxWidth}px;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.white};
  align-items: center;
  ul {
    display: flex;
    flex-flow: row nowrap;
    padding: 0;
    justify-content: space-between;
    align-items: center;
    li {
      margin-right: ${(props) => props.theme.margin * 2}px;
      display: block;
    }
  }
`;

const RightSection = styled.ul`
  flex: 0.5;
`;
const LeftSection = styled.ul`
  flex: 0.4;
  li a {
    color: ${(props) => props.theme.colors.accent.orange} !important;
  }
`;
export { Navbar as StyledNavbar, RightSection, LeftSection };

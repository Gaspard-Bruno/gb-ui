import styled from "styled-components";

const Navbar = styled.nav`
  display: flex;
  flex-flow: row-nowrap;
  justify-content: space-evenly;
  padding: 20px;
  background-color: ${(props) => props.theme.brandColor};
  color: ${(props) => props.theme.white};
`;

export default Navbar;

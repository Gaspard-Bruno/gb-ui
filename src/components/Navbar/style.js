import styled from "styled-components";

const Navbar = styled.nav`
  display: flex;
  flex-flow: row-nowrap;
  justify-content: flex-start;
  padding: 5px 25px 0px 25px;
  max-width: ${(props) => props.theme.maxWidth}px;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.white};
  align-items: center;
  > ul {
    display: flex;
    flex-flow: row nowrap;
    flex: 0.5;
    margin: auto;
    flex-shrink: 0;
    justify-content: space-between;
    li {
      display: block;
    }
  }
`;

export default Navbar;

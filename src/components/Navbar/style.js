import styled from "styled-components";

const Navbar = styled.nav`
  display: flex;
  flex-flow: row-nowrap;
  justify-content: flex-start;
  padding: 5px 25px 0px 25px;
  background-color: ${(props) => props.theme.brandColor};
  color: ${(props) => props.theme.white};
  align-items: center;
  > img {
    height: 40px;
    width: 100px;
    margin-right: auto;
    align-self: flex-end;
    position: relative;
    top: 3px;
  }
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

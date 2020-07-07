import styled from "styled-components";

const Logo = styled.div`
  svg {
    width: ${(props) => props.size}px;
    margin: ${(props) => props.theme.margin / 2}px;
    vertical-align: middle;
  }
`;

export default Logo;

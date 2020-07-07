import styled from "styled-components";

const Logo = styled.div`
  margin: 0 ${(props) => props.theme.margin / 2}px;
  svg {
    width: ${(props) => props.size}px;
    vertical-align: middle;
  }
`;

export default Logo;

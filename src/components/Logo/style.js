import styled from "styled-components";

const Logo = styled.div`
  margin: 0 ${props => props.theme.margin / 2}px;
  align-self: ${props => (props.self ? props.self : "")};
  svg {
    width: ${props => props.size}px;
    vertical-align: middle;
    z-index: 1000;
  }
`;

export default Logo;

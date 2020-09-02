import styled from "styled-components";

const Logo = styled.div`
  min-width: 120px;
  margin: 0 ${props => props.theme.margin / 2}px;
  ${props =>
    props.center &&
    `
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
  `}
  svg {
    width: ${props => props.size}px;
    vertical-align: middle;
    z-index: 1000;
  }
`;

export default Logo;

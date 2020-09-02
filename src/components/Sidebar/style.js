import styled from "styled-components";

const Sidebar = styled.div`
  width: 240px;
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.brand.orange};
  > div {
    padding: ${props =>
      `${props.theme.margin * 1.5}px ${props.theme.margin * 2}px`};
  }
`;

export default Sidebar;

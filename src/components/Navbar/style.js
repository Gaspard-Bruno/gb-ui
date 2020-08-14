import styled from "styled-components";

import { GridRow, GridCol } from 'components/Layout';

const Navbar = styled(GridRow)`
  display: flex;
  height: 80px;
  background-color: ${props => props.theme.colors.white};
  position: sticky;
  top: 0;
  z-index: 10;

  a {
    margin-right: ${props => props.theme.margin * 2}px;
  }
`;

const LeftSection = styled(GridCol)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: ${props => props.theme.margin * 1.5}px;
`;
const RightSection = styled(GridCol)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: ${props => props.theme.margin * 1.5}px;

  a {
    color: ${props => props.theme.colors.brand.orange} !important;
  }

  button {
    margin-left: ${props => props.theme.margin * 1.5}px;
  }
`;

const Spacer = styled(GridCol)`
`;

export { Navbar as StyledNavbar, RightSection, LeftSection, Spacer };

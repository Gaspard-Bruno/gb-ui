import styled from "styled-components";

const StyledSpecialistTable = styled.div`
  font-size: 14px;
  line-height: 16px;
  color: ${props => props.theme.colors.darkBlue};
  text-transform: capitalize;
`;

export const Header = styled.div`
  border-radius: 2px;
  background-color: ${props => props.theme.colors.lightestBeige};
  height: 48px;
  width: 100%;
  display: flex;
  font-weight: bold;
`;

export default StyledSpecialistTable;

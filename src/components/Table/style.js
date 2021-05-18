import styled from 'styled-components';

const StyledTable = styled.div`
  font-size: 14px;
  line-height: 16px;
  color: ${props => props.theme?.colors.text};
`;

export const Header = styled.div`
  border-radius: 2px;
  background-color: ${props => props.theme?.colors.brand?.altLight};
  height: 48px;
  width: 100%;
  display: flex;
  font-weight: bold;
`;

export default StyledTable;

import styled from 'styled-components';
import { Row } from '../Layout';

export const StyledAddItem = styled.span`
  margin: 10px 0px 10px 0px;
  color: ${props => props.theme?.colors.brand.red};
  cursor: pointer;
`;

export const StyledContentContainer = styled(Row)`
  & > button {
    background-color: ${props => props.theme.colors.brand.yellow};
    margin: 0 !important;
    position: relative;
    left: 90%;
    top: -45px;
  }
`;

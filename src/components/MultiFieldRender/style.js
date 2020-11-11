import styled from 'styled-components';
import { Row } from '../Layout';

export const StyledAddItem = styled.span`
  color: ${props => props.theme?.colors.brand.red};
  cursor: pointer;
`;

export const StyledContentContainer = styled(Row)`
  & > button {
    background-color: ${props => props.theme.colors.white};
    padding: 5px;
    margin: 0 !important;
    position: relative;
    left: 90%;
    top: -45px;
    border: 1px solid ${props => props.theme.colors.warning.default};
  }
`;

import styled from 'styled-components';
import { Row } from '../Layout';

export const StyledAddItem = styled.span`
  color: ${props => props.theme?.colors.brand.red};
  cursor: pointer;
`;

export const StyledContentContainer = styled(Row)`
  & > button {
    background-color: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.feedback.warning.default};
    width: 40px;
    height: 40px;
    position: relative;
    top: -45px;
    left: calc(100% - 35px);
    padding: 0;
    margin: 0 !important;
  }
`;

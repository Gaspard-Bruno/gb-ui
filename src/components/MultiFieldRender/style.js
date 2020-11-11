import styled from 'styled-components';
import { Row } from '../Layout';

export const StyledAddItem = styled.span`
  color: ${props => props.theme?.colors.brand.red};
  cursor: pointer;
`;

export const StyledContentContainer = styled(Row)`
  flex-flow: row nowrap;
  & > button {
    background-color: ${props => props.theme.colors.white};
    width: 40px;
    height: 40px;
    border: 1px solid ${props => props.theme.colors.feedback.warning.default};
  }
`;

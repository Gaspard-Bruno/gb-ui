import styled from 'styled-components';
import { Body } from '../Text';
export const WidgetContainer = styled.div`
  > div {
    margin-top: ${props => props.theme?.margin}px;
    margin-bottom: ${props => props.theme?.margin * 1.5}px;
  }
`;

export const TextContainer = styled(Body)`
  align-self: flex-end;
  margin-right: ${props => props.theme.margin}px;
  margin-left: ${props => props.theme.margin}px;
`;

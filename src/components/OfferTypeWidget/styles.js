import styled from 'styled-components';
import { Body } from '../Text';
export const WidgetContainer = styled.div``;

export const TextContainer = styled(Body)`
  align-self: center;
  margin-right: ${props => props.theme.margin}px;
  margin-left: ${props => props.theme.margin}px;
`;

export const RecurrencyTextHolder = styled(Body)`
  align-self: flex-end;
`;

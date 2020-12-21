import styled from 'styled-components';
import { Body } from '../Text';
import { media } from '../Layout';

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
  ${media.mobile(`
    margin-right: 0px;
    margin-left: 6px;
  `)}
`;

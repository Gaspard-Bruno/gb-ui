import styled from 'styled-components';
import { Row, Col } from '../Layout';

export const WidgetContainer = styled(Col)`
  padding: 0px;
  width: auto !important;
`;
export const HeadingContainer = styled(Row)`
  align-items: center;
  gap: 6px;
  h2,
  p {
    margin: 0px;
  }
`;
export const BodyContainer = styled(Row)`
  p {
    margin: 0px;
  }
`;
export const ExtrasContainer = styled(Row)`
  background-color: ${props => props.theme.colors.lightestBeige};
  border-radius: ${props => props.theme.margin / 2}px;
  margin-top: ${props => props.theme.margin}px;
  p {
    white-space: pre-wrap;
    margin: 0;
    padding: ${props => props.theme.margin}px;
  }
`;

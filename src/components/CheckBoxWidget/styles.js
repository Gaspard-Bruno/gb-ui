import styled from 'styled-components';
import { Row } from '../Layout';

export const StyledContainer = styled.div``;

export const CheckboxWidgetContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin-bottom: ${props => props.theme?.margin * 2 - 8}px;
  p {
    max-width: calc(100% - ${props => props.theme?.margin * 3}px);
    margin: 0 ${props => props.theme?.margin / 2}px;
  }
`;

export const StyledCheckbox = styled.input`
  width: ${props => props.theme?.margin * 1.5}px;
  height: ${props => props.theme?.margin * 1.5}px;
  border: ${props => `1px solid ${props.theme?.colors.mediumBeige}`};
`;

export const ContentRow = styled(Row)`
  > div {
    width: 100%;
    margin: 16px 30px;
  }
`;

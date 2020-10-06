import styled from 'styled-components';

export const StyledContainer = styled.div``;

export const CheckboxGroudContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-bottom: ${props => props.theme.margin * 2 - 8}px;
  p {
    margin: 0 ${props => props.theme.margin / 2}px;
  }
`;

export const StyledCheckbox = styled.input`
  width: ${props => props.theme.margin * 1.5}px;
  height: ${props => props.theme.margin * 1.5}px;
  border: ${props => `1px solid ${props.theme.colors.mediumBeige}`};
`;

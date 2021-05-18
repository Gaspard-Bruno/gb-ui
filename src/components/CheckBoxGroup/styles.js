import styled from 'styled-components';

export const StyledContainer = styled.div``;

export const CheckboxGroupContainer = styled.div`
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
         border: ${props => `1px solid ${props.theme?.colors.brand?.altLight}`};
       `;

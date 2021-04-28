import styled from 'styled-components';

export const StyledIconButton = styled.button`
  padding: 0;
  outline: none;
  margin: 0;
  background: transparent;
  cursor: ${({ isInteractive }) => (isInteractive ? 'pointer' : 'initial')};
  border: none;
  &:hover {
    svg path {
      fill: ${({ isInteractive, onHoverColor }) =>
        (isInteractive && onHoverColor) || ''} !important;
    }
  }
`;

export default StyledIconButton;

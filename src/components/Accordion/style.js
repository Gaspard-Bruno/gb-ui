import styled from 'styled-components';

export const AccordionContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: ${props => props.theme.margin}px;
  flex-flow: column nowrap;
  justify-content: flex-start;
  border-bottom: 1px solid ${props => props.theme?.colors.mediumBeige};
`;

export const AccordionTitle = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  > h2 {
    color: ${props => props.theme?.colors.brand.orange};
  }
  > button {
    margin: 0 ${props => props.theme.margin}px !important;
  }
  svg {
    transition: all 0.25s;
    transform: rotate(${props => (props.isOpen ? '180deg' : 0)});
  }
`;
export const ContentContainer = styled.div`
  padding-bottom: ${props => props.theme.margin}px;
  position: relative;
  color: ${props => props.theme?.colors.grey};
  opacity: ${props => (props.isOpen ? 1 : 0)};
  bottom: ${props => (props.isOpen ? 0 : 100)}px;
  height: ${props => (props.isOpen ? 'auto' : 0)}px;
  transform: scaleY(${props => (props.isOpen ? 1 : 0)});
`;

import styled from 'styled-components';

export const AccordionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  border-bottom: 1px solid ${props => props.theme?.colors.mediumBeige};
`;

export const AccordionTitle = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
  justify-content: space-between;
  > h2 {
    color: ${props => props.theme?.colors.brand.orange};
  }
  svg {
    transition: all 0.25s;
    transform: rotate(${props => (props.isOpen ? '180deg' : 0)});
  }
`;
export const ContentContainer = styled.div`
  transition: all 0.5s;
  padding-bottom: 1%;
  position: relative;
  color: ${props => props.theme?.colors.grey};
  opacity: ${props => (props.isOpen ? 1 : 0)};
  bottom: ${props => (props.isOpen ? 0 : 100)}px;
  height: ${props => (props.isOpen ? 'auto' : 0)}px;
  transform: scaleY(${props => (props.isOpen ? 1 : 0)});
`;

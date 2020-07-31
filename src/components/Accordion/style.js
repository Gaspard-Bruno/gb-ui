import styled from "styled-components";

export const AccordionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
`;

export const AccordionTitle = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
  justify-content: space-between;
  > h2 {
    color: ${props => props.theme.colors.brand.orange};
  }
  svg {
    transition: all 0.25s;
    transform: rotate(${props => (props.isOpen ? "180deg" : 0)});
  }
`;
export const ContentContainer = styled.div`
  transition: all 0.25s;
  border-bottom: 1px solid ${props => props.theme.colors.mediumBeige};
  transform: scaleY(${props => (props.isOpen ? 1 : 0)});
`;
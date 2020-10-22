import styled from 'styled-components';

export const TabContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
`;

export const TabGroup = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
  justify-content: ${props => (props.justify ? props.justify : 'flex-start')};
`;

export const TabButton = styled.button`
  border-radius: 4px;
  padding: ${props => props.theme?.margin / 1.5}px;
  margin: ${props => props.theme?.margin}px;
  outline: none;
  cursor: pointer;
  border: none;
  background-color: ${props =>
    props.isSelected
      ? props.theme?.colors.brand.orange
      : 'transparent'};
  margin-bottom: ${props => props.theme?.margin}px;
  transition: all 0.25s;
  > * {
    color: ${props =>
      props.isSelected
        ? props.theme?.colors.white
        : props.theme?.colors.darkBlue};
    &:hover {
      color: ${props =>
        props.isSelected
          ? props.theme?.colors.white
          : props.theme?.colors.darkBlue};
    }
  }
`;

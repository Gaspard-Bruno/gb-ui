import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin-top: ${props => props.theme.margin * 2 + 10}px;
  margin-bottom: ${props => props.theme.margin}px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;
export const ButtonGroupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  p {
    cursor: pointer;
    position: absolute;
    color: ${props =>
      !console.log(props.isSelected) && props.isSelected
        ? props.theme.colors.darkBlue
        : props.theme.colors.grey};
    margin: 0;
  }
`;

export const StyledButton = styled.button`
  margin: 0 !important;
  outline: none;
  width: ${props => props.theme.margin * 4}px;
  height: ${props => props.theme.margin * 3}px;
  background-color: ${props => `${props.theme.colors.white}`};
  cursor: pointer;
  border: ${props =>
    props.isSelected
      ? `1px solid ${props.theme.colors.darkBlue}`
      : `1px solid ${props.theme.colors.mediumBeige}`};
  }
`;

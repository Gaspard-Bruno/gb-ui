import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  > p {
    min-height: 24px;
    margin: 8px 0px;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 16px;
`;

export const ButtonGroupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    cursor: pointer;
    position: absolute;
    color: ${props =>
      props.isSelected
        ? props.theme?.colors.darkBlue
        : props.theme?.colors.grey};
    margin: 0;
  }
`;

export const StyledButton = styled.button`
  margin: 0 !important;
  outline: none;
  width: ${props => props.theme?.margin * 4}px;
  height: ${props => props.theme?.margin * 3}px;
  background-color: ${props => `${props.theme?.colors.white}`};
  cursor: pointer;
  border: ${props =>
    props.isSelected
      ? `1px solid ${props.theme?.colors.darkBlue}`
      : `1px solid ${props.theme?.colors.mediumBeige}`};
  }
`;

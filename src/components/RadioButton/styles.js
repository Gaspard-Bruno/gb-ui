import styled from 'styled-components';

export const StyledContainer = styled.div``;

export const RadioGroudContainer = styled.div`
  display: ${(props) => (props.isVerticalAligned ? 'flex' : 'inline-flex')};
  align-items: ${(props) => (props.align ? props.align : 'baseline')};
  margin-top: ${(props) => props.theme?.margin}px;
  margin-bottom: ${(props) => props.theme?.margin * 2 - 8}px;
  p {
    margin: 0 ${(props) => props.theme?.margin / 2}px;
  }
`;

export const StyledRadio = styled.button`
  -webkit-transition: all 0.25s;
  margin: 0 !important;
  outline: none;
  width: ${(props) => props.theme?.margin * 1.5}px;
  height: ${(props) => props.theme?.margin * 1.5}px;
  border-radius: 15px;
  border-color: transparent;
  border: ${(props) => `1px solid ${props.theme?.colors.mediumBeige}`};
  background-color: ${(props) =>
    props.isSelected ? props.theme?.colors.brand.yellow : 'white'};
  transition: all 0.25s;
  > * {
    color: ${(props) =>
      props.isSelected
        ? props.theme?.colors.white
        : props.theme?.colors.darkBlue};
    &:hover {
      color: ${(props) =>
        props.isSelected
          ? props.theme?.colors.white
          : props.theme?.colors.darkBlue};
    }
  }
`;
export const FocusedRadio = styled.div`
    display: ${(props) => (props.isSelected ? '' : 'none')};
    background-color: black;
    color: black;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
`;

export const SplitSelectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 48%);
  justify-content: space-between;
  align-items: flex-end;
`;

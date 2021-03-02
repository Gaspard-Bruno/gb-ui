import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const IconContainer = styled.div`
  visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    position: absolute;
    height: 16px;
    width: 16px;
    top: -21px;
  }
`

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckBox = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 3px;
  border: 1px solid ${props => props.checked 
    ? props.theme.colors.brand.yellow
    : props.theme.colors.mediumBeige
  };
  transition: all 150ms;
  position: relative;
  margin: 0px;
  background-color: ${props => props.checked 
    ? props.theme.colors.brand.yellow 
    : 'white'};

    ${IconContainer} {
      visibility: ${props => (props.checked ? 'visible' : 'hidden')}
    }    
`;

export default StyledCheckBox;
import styled from 'styled-components';

export const StyledErrorContainer = styled.div`
  position: absolute;
  p {
    position: relative;
    top: 14px;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  width: ${props => (props.mini ? '33%' : 'auto')};

  color: ${props =>
    props.error
      ? props.theme?.colors.feedback.error.default
      : props.theme?.colors.darkBlue};
  > p {
    min-height: 24px;
    margin: ${props => props.theme?.margin / 2}px 0;
  }
  input {
      border-radius: 2px;
  padding: ${props => props.theme?.margin - 5}px ${props =>
  props.theme?.margin / 2}px;
  border: 1px solid
    ${props =>
      props.error
        ? props.theme?.colors.feedback.error.default
        : props.theme?.colors.mediumBeige};
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme?.colors.darkBlue};
  outline: none;
  &:focus {
    outline: none;
    border-radius: 2px;
    border-color: ${props =>
      props.error
        ? props.theme?.colors.feedback.error.default
        : props.theme?.colors.darkBlue};
  }
  &:disabled {
    background-color: ${props => props.theme?.colors.lightBeige};
    color: ${props => props.theme?.colors.grey};
  }
`;

export const StyledIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  & > span {
    position: absolute;
    right: 10px;
    bottom: 12px;
    align-self: flex-end;
    background-color: white;
  }
`;

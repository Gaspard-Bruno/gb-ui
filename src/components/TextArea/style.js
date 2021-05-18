import styled from 'styled-components';

export const TextAreaContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  color: ${props =>
    props.error
      ? props.theme?.colors.feedback.error
      : props.theme?.colors.text};
  > p {
    margin: ${props => props.theme?.margin / 2}px 0;
  }
`;

const TextArea = styled.textarea`
  border-radius: 2px;
  resize: none;
  padding: ${props => props.theme?.margin}px
    ${props => props.theme?.margin / 2}px;
  border: 1px solid
    ${props =>
      props.error
        ? props.theme?.colors.feedback.error
        : props.theme?.colors.brand?.altLight};
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme?.colors.text};
  outline: none;
  &:focus {
    outline: none;
    border-radius: 2px;
    border-color: ${props =>
      props.error
        ? props.theme?.colors.feedback.error
        : props.theme?.colors.text};
  }
  &:disabled {
    background-color: ${props => props.theme?.colors.brand?.altLight};
    color: ${props => props.theme?.colors.grey};
  }
`;

export default TextArea;

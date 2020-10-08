import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  padding: 0;
  input {
    border: 1px solid ${props => props.theme?.colors.mediumBeige};
  }
  position: relative;
`;

const getStylesFromType = (theme, type) => {
  if (type === 'service') {
    return `
    border-radius: 2px;
    padding-left: 40px;
    color: ${theme?.colors.mediumBeige};
    position: relative;
    &:focus {
      outline: ${theme?.colors.darkBlue};
    }
  `;
  }
};

export const SearchIconContainer = styled.div`
  position: absolute;
  margin: 12px 0px 0px 8px;

  svg {
    height: 20px;
  }
`;

const Input = styled.input`
  flex: 3;
  border-radius: 48px 0 0 48px;
  color: ${props => props.theme?.colors.grey};
  padding: 0 ${props => props.theme?.margin * 1.5}px;
  &:focus {
    outline: none;
  }
  font-family: Muli;
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme?.grey};
  ${props => getStylesFromType(props.theme, props.type)}
`;
const Button = styled.button`
  border-radius: 0 48px 48px 0;
  outline: none !important;
  background-color: ${props => props.theme?.colors.brand.yellow};
  border: none;
  padding: 0 ${props => props.theme?.margin * 1}px;
  flex: 1;
  > p {
    margin: ${props => props.theme?.margin}px;
  }
`;

export { Input, Button, Container };

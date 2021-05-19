import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  padding: 0;
  input {
    border: 1px solid ${props => props.theme.brand?.altLight};
  }
  position: relative;
`;

const getStylesFromType = (theme, type) => {
  if (type === 'filter') {
    return `
    border-radius: 2px;
    padding-left: 40px;
    color: ${theme.colors.text};
    position: relative;
    border: 1px solid ${theme.colors.brand?.altLight} !important;
    &:focus {
      outline: ${theme.colors.brand?.altLight};
    }
  `;
  }
};

export const SearchIconContainer = styled.div`
  position: absolute;
  margin: 12px 0px 0px 8px;

  svg {
    height: 16px;
    width: 16px;
  }
`;

const Input = styled.input`
  flex: 3;
  border-radius: 48px 0 0 48px;
  color: ${props => props.theme.colors.grey};
  padding: 0 ${props => props.theme.margin * 1.5}px;
  &:focus {
    outline: none;
  }

  ${({ theme }) => theme.fontPrimary()}
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme.grey};
  ${props => getStylesFromType(props.theme, props.type)}
`;
const Button = styled.button`
  border-radius: 0 48px 48px 0;
  outline: none !important;
  background-color: ${props => props.theme.colors.brand.alt};
  border: none;
  padding: 0 ${props => props.theme.margin * 1}px;
  flex: 1;
  > p {
    margin: ${props => props.theme.margin}px;
  }
`;

export { Input, Button, Container };

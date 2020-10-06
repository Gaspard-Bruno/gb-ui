import styled from 'styled-components';
const getSelectedBackground = props => {
  switch (props.bg) {
    case 'alt':
      return props.theme.colors.lightBeige;
    case 'secondary':
      return props.theme.colors.brand.yellow;
    case 'terceary':
      return props.theme.colors.brand.lightBlue;
    default:
      return props.bg || props.theme.colors.lightBeige;
  }
};

export const StyledForm = styled.form`
  flex: 1;
  display: flex;
  flex-flow: column;
  background-color: ${props => getSelectedBackground(props)};
  padding: ${props => props.theme.margin * 2}px;
  > h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-align: left;
  }
  > div {
    & > textarea {
      min-height: ${props => props.theme.margin * 4}px;
    }
    & > p {
      text-align: left;
    }
  }
`;

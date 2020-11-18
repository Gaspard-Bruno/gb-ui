import styled from 'styled-components';
import { Heading } from '../Text';

const getSelectedBackground = props => {
  switch (props.bg) {
    case 'alt':
      return props.theme?.colors.lightBeige;
    case 'secondary':
      return props.theme?.colors.brand.yellow;
    case 'terceary':
      return props.theme?.colors.brand.lightBlue;
    default:
      return props.bg || props.theme?.colors?.white;
  }
};

export const StyledRemoveSpan = styled.span`
  color: ${props => props.theme.colors.brand.red};
  fontweight: bold;
  cursor: pointer;
`;
export const StyledServiceHeader = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.lightBeige};
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: ${props => `1px solid ${props.theme.colors.mediumBeige}`};
`;

export const StyledHeaderInfo = styled(Heading)`
  margin: 0;
`;

export const StyledForm = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  background-color: ${props => getSelectedBackground(props)};
  margin: ${props => props.theme?.margin * 2}px auto;
  border: ${props => `1px solid ${props.theme.colors.mediumBeige}`};
  > h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-align: left;
  }
  > div {
    padding: 20px;
    & > textarea {
      min-height: ${props => props.theme?.margin * 6}px;
    }
    & > p {
      text-align: left;
    }
  }
`;

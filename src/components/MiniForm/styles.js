import styled from 'styled-components';
import { Heading } from '../Text';
import get from 'lodash.get';

const getSelectedBackground = props => {
  return get(props.theme?.colors, props.bg, props.theme?.colors.background);
};

export const StyledRemoveSpan = styled.span`
  color: ${props => props.theme.colors.feedback?.error?.default};
  fontweight: bold;
  cursor: pointer;
`;
export const StyledServiceHeader = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors?.brand?.altLight};
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: ${props => `1px solid ${props.theme.colors?.brand?.altLight}`};
`;

export const StyledHeaderInfo = styled(Heading)`
  margin: 0;
`;

export const StyledForm = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  background-color: ${props => getSelectedBackground(props)};
  margin-bottom: ${props => props.theme?.margin}px;
  border: ${props => `1px solid ${props.theme.colors?.brand?.altLight}`};
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

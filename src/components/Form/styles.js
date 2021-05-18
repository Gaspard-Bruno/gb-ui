import styled from 'styled-components';
import { media, Col } from '../Layout';

import get from 'lodash.get';

const getSelectedBackground = props => {
  return get(props.theme?.colors, props.bg, 'transparent');
};

export const StyledCol = styled(Col)`
  && {
    ${props => props.hidden && media.mobile(`display: none; flex: 0;`)}
  }
`;

export const FormContainer = styled.div`
  background-color: ${props => getSelectedBackground(props)};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 744px;
  width: 100%;
  button {
    align-self: center;
    margin: ${props => props.theme?.margin * 2.5}px 0;
  }
`;

export const StyledForm = styled.form`
  flex: 1;
  display: flex;
  flex-flow: column;
  > h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-align: left;
  }
  > div {
    margin-bottom: ${props => props.theme?.margin}px;
    & > textarea {
      min-height: ${props => props.theme?.margin * 6}px;
    }
    & > p {
      text-align: left;
    }
  }
`;

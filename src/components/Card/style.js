import styled from 'styled-components';

import get from 'lodash.get';

const getSelectedBackground = props => {
  return get(props.theme?.colors, props.bg, props.theme?.colors.background);
};

const Card = styled.div`
  border-radius: 16px;
  padding: ${props => props.theme?.margin * (props.padding || 1)}px;
  box-shadow: ${props => (props.shadow ? props.theme?.boxShadow : 0)};
  background-color: ${props => getSelectedBackground(props)};
  color: ${props => props.theme?.colors.text};
  align-items: ${props => (props.align ? `${props.align}` : '')};
  justify-content: ${props => (props.justify ? `${props.justify}` : 'none')};
  ${props => props?.customStyle(props) ?? ''}
`;

export default Card;

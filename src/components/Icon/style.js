import IcoMoon from 'icomoon-react';
import styled from 'styled-components';
import get from 'lodash.get';

const getSelectedBackground = props => {
  return get(props.theme?.colors, props.color, props.color);
};
const StyledIcoMoon = styled(IcoMoon)`
  path {
    fill: ${props => getSelectedBackground(props)};
  }
`;

export default StyledIcoMoon;

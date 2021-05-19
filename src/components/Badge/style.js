import styled from 'styled-components';
import get from 'lodash.get';

const getBadgeBg = props => {
  return get(props.theme?.colors, props.bg, props.theme.colors.brand.main);
};

const Badge = styled.span`
  border-radius: 2px;
  min-height: 24px;
  display: flex;
  flex-flow: row nowrap;
  width: fit-content;
  height: fit-content;
  background-color: ${props =>
    props.chip
      ? props.theme?.colors.brand?.altLight
      : getBadgeBg(props.theme?.colors, props.status)};
  > p {
    color: ${props =>
      props.chip ? props.theme?.colors.text : props.theme?.colors.black};
    margin: ${props => props.theme?.margin / 4}px
      ${props => props.theme?.margin * 0.75}px;
  }
  > svg {
    vertical-align: middle;
    margin: auto ${props => props.theme?.margin * 0.75}px;
    margin-left: 0;
  }
`;

export default Badge;

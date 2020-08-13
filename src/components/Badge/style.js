import styled from "styled-components";

const getColorFromStatus = (theme, status) =>
  ({
    complete: theme.brand.blue,
    received: theme.brand.blue,
    analysis: theme.brand.yellow,
    active: theme.feedback.success.default,
    canceled: theme.feedback.error.default,
    house: theme.muted.blue,
    accompaning: theme.muted.green,
    lessons: theme.muted.yellow
  }[status]);

const Badge = styled.span`
  height: 24px;
  display: flex;
  flex-flow: row nowrap;
  background-color: ${props =>
    props.chip
      ? props.theme.colors.lightBeige
      : getColorFromStatus(props.theme.colors, props.status)};
  > p {
    color: ${props =>
      props.chip ? props.theme.colors.darkBlue : props.theme.colors.black};
    margin: ${props => props.theme.margin / 4}px
      ${props => props.theme.margin * 0.75}px;
  }
  > svg {
    vertical-align: middle;
    margin: auto ${props => props.theme.margin * 0.75}px;
    margin-left: 0;
  }
`;

export default Badge;

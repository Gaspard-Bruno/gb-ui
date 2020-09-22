import styled from "styled-components";

const getColorFromStatus = (theme, status) =>
  ({
    contact: theme.brand.blue,
    received: theme.brand.blue,
    complete: theme.brand.blue,
    closed: theme.brand.blue,
    analysis: theme.brand.yellow,
    awaiting_specialist: theme.brand.yellow,
    awaiting_visit_payment: theme.brand.yellow,
    awaiting_interview: theme.brand.yellow,
    awaiting_payment: theme.brand.yellow,
    awaiting_visit: theme.brand.yellow,
    awaiting_conclusion: theme.feedback.success.default,
    canceled: theme.feedback.error.default,
    rejected: theme.feedback.error.default,
    new_candidate: theme.brand.blue,
    accepted: theme.brand.green,
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

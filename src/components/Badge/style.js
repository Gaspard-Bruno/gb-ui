import styled from 'styled-components';

export const getBadgeColorFromStatus = (theme, status) =>
  ({
    contact: theme?.brand.blue,
    received: theme?.brand.blue,
    complete: theme?.brand.blue,
    closed: theme?.brand.blue,
    analysis: theme?.brand.yellow,
    awaiting_specialist: theme?.brand.yellow,
    awaiting_visit_payment: theme?.brand.yellow,
    awaiting_interview: theme?.brand.yellow,
    awaiting_payment: theme?.brand.yellow,
    awaiting_visit: theme?.brand.yellow,
    awaiting_conclusion: theme?.feedback.success.default,
    canceled: theme?.feedback.error.default,
    rejected: theme?.feedback.error.default,
    new_candidate: theme?.brand.blue,
    accepted: theme?.brand.green,
    casa: theme.muted.blue,
    acompanhamento: theme.muted.green,
    aulas: theme.muted.yellow,
    reparações: theme.muted.blue,
    comingSoon: theme.brand.lightBeige,
    // Backoffice
    awaiting_service_payment: theme.brand.yellow,
    awaiting_meeting: theme.brand.yellow,
    cancelled: theme.feedback.error.default,
    awaiting_details: theme.brand.yellow,
    reopened: theme.brand.yellow,

    // services
    Costura: theme.muted.blue,
    'Apoio a Seniores': theme.muted.green,
    Jardinagem: theme.muted.blue,
    Limpezas: theme.muted.blue,
    'Experiência Gastronómica': theme.muted.blue,
    'Apoio Familiar a Crianças': theme.muted.green,
    Petsitting: theme.muted.green,
    Petcare: theme.muted.green,
    'Aulas de Música': theme.muted.yellow,
    Reparações: theme.muted.blue,
    'Passar a Ferro': theme.muted.blue,
    'Chef em Casa': theme.muted.blue,
    'Aulas de Línguas': theme.muted.yellow,

    // serviceType
    standard: theme.brand.blue,
    premium: theme.feedback.success.default,
    test: theme.feedback.warning.default,

    // payments
    draft: theme.colors.grey,
    open: theme.feedback.error.default,
    paid: theme?.feedback.success.default,
    uncollectible: theme.colors.grey,
    void: theme.colors.grey
  }[status]);

const Badge = styled.span`
  border-radius: 2px;
  height: 24px;
  display: flex;
  flex-flow: row nowrap;
  width: fit-content;
  background-color: ${props =>
    props.chip
      ? props.theme?.colors.lightBeige
      : getBadgeColorFromStatus(props.theme?.colors, props.status)};
  > p {
    color: ${props =>
      props.chip ? props.theme?.colors.darkBlue : props.theme?.colors.black};
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

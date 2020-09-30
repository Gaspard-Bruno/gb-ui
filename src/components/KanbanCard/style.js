import styled from 'styled-components';

import { SmallBody } from '../Text';

const KanbanCard = styled.div`
  width: 260px;
  border: 1px solid ${(props) => props.theme.colors.mediumBeige};
  box-sizing: border-box;
  border-radius: 4px;
  padding: 16px 8px 8px;
  background-color: white;
  margin-bottom: ${(props) => props.theme.margin}px;
`;

export const BadgeContainer = styled.div`
  padding: 0px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: flex-start;

  p {
    color: white !important;
  }
`;

export const IconContainer = styled.div`
  min-height: 32px;
  min-width: 32px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.lightBeige};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;

  svg {
    width: 14px;
  }
`;

export const AdminContainer = styled.div`
  margin-top: 16px;
  padding-top: 8px;
  border-top: 1px solid ${(props) => props.theme.colors.mediumBeige};
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  margin-top: 14px;
  text-transform: capitalize;
`;

export const ServiceDetails = styled(SmallBody)`
  margin: 8px 0px;
  text-transform: capitalize;

  span {
    color: ${(props) => props.theme.colors.grey};
  }
`;

export const Recurrent = styled.div``;

export default KanbanCard;

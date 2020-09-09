import styled from "styled-components";

const getBorderStyles = (listPosition = "middle") => {
  switch (listPosition) {
    case "top":
      return `
                border-radius: 4px 4px 0px 0px;
            `;
    case "middle":
      return `
                border-top: none;
            `;
    case "bottom":
      return `
                border-radius: 0px 0px 4px 4px;
                border-top: none;
            `;
    default:
      break;
  }
};

const StyledRequestCard = styled.div`
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.mediumBeige};
  display: flex;

  ${props => getBorderStyles(props.listPosition)}
`;

export const Status = styled.div`
  div {
    margin-bottom: 8px;
  }

  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${props => props.theme.colors.brand.orange};
  }
`;

export const BadgeContainer = styled.div`
  padding: 0px;
  display: flex;
  flex-direction: flex-start;

  p {
    color: white !important;
  }
`;

export const Details = styled.div`
  color: ${props => props.theme.colors.grey};
  font-size: 14px;
  line-height: 16px;
  text-transform: capitalize;

  p {
    margin: 0px;
    &:first-child {
      margin: 0px 0px 8px 0px;
    }
  }

  span {
    color: ${props => props.theme.colors.darkBlue};
  }
`;

export const DateDetails = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 16px;
  color: ${props => props.theme.colors.darkBlue};
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.lightBeige};

  svg {
    width: 18px;
  }
`;

export default StyledRequestCard;

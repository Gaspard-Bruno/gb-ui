import styled from "styled-components";

const getActiveStyles = (theme, isActive, type) => {
  if (isActive) {
    return `
            border: ${
              type === "ellipsis"
                ? "none"
                : "1px solid " + theme.colors.darkBlue
            };
            color: ${theme.colors.darkBlue};
        `;
  } else {
    return `
            border: ${
              type === "ellipsis"
                ? "none"
                : "1px solid " + theme.colors.mediumBeige
            };
            h3 {
                color: ${theme.colors.mediumBeige};
            }
        `;
  }
};

export const StyledTracker = styled.div`
  display: flex;
  margin-right: 8px;
  height: 24px;
  min-width: 23px;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  box-sizing: border-box;
  border-radius: 2px;
  font-size: 12px;
  ${props => getActiveStyles(props.theme, props.isActive, props.type)};

  &:hover {
    cursor: pointer;
  }

  h3 {
    margin: 0px;
  }

  svg {
    height: 50%;
    width: 50%;
  }
`;

export default StyledTracker;

import styled from "styled-components";

const getAlertType = (type, theme) => {
  switch (type) {
    case "defaultSimple":
      return `
        background-color: ${theme.colors.feedback.error.background};
        border: transparent;
        div > div > span {
          color: ${theme.colors.darkBlue};
        }
        div > p {
          color: ${theme.colors.brand.red};
          margin: 0;
        }
      `;
    case "defaultWithCloseX":
      return `
        background-color: ${theme.colors.feedback.error.background};
        border: transparent;
        div > div > span {
          color: ${theme.colors.darkBlue};
        }
        div > p {
          color: ${theme.colors.brand.red};
          margin: 0;
        }
      `;
    case "defaultWithCloseXAndTitle":
      return `
        background-color: ${theme.colors.feedback.error.background};
        border: transparent;
        div > p {
          color: ${theme.colors.brand.red};
          margin: 0;
        }
        div > h3 {
          color: ${theme.colors.brand.red};
          margin: 0;
        }
      `;
    case "simpleFilled":
      return `
        background-color: ${theme.colors.brand.red};
        border: transparent;
        div > div > span {
          color: ${theme.colors.white};
        }
        div > p {
          color: ${theme.colors.white};
          margin: 0;
        }
      `;
    case "filledWithCloseX":
      return `
        background-color: ${theme.colors.brand.red};
        border: transparent;
        div > div > span {
          color: ${theme.colors.white};
        }
        div > p {
          color: ${theme.colors.white};
          margin: 0;
        }
      `;
    case "filledWithCloseXAndTitle":
      return `
        background-color: ${theme.colors.brand.red};
        border: transparent;
        div > div > span {
          color: ${theme.colors.white};
        }
        div > p {
          color: ${theme.colors.white};
          margin: 0;
        }
        div > h3 {
          color: ${theme.colors.white};
          margin: 0;
        }
      `;
    default:
      break;
  }
};

const AlertContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 10;
`;

const TitleAndTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledAlert = styled.button`
  display: block;
  border-radius: ${props => (props.type === "simpleFilled" ? 3 : 40)}px;
  outline: none;
  padding: ${props =>
    props.small ? props.theme.margin * 0.75 : props.theme.margin * 1.5}px;
  ${props => getAlertType(props.type, props.theme)}
  > * {
    margin: 0 auto;
  }
`;

const XContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10;
  > span {
    font-size: 24px;
  }
`;

export default {
  StyledAlert,
  AlertContainer,
  IconContainer,
  TitleAndTextContainer,
  XContainer
};

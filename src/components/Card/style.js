import styled from "styled-components";

const getSelectedBackground = props => {
  switch (props.bg) {
    case "alt":
      return props.theme.colors.lightBeige;
    case "secondary":
      return props.theme.colors.brand.yellow;
    case "terceary":
      return props.theme.colors.brand.lightBlue;
    case "transparent":
      return "transparent";
    default:
      return props.theme.colors.white;
  }
};

const Card = styled.div`
  border-radius: 16px;
  padding: ${props => props.theme.margin * (props.padding || 1)}px;
  box-shadow: ${props => (props.shadow ? props.theme.boxShadow : 0)};
  background-color: ${props => getSelectedBackground(props)};
  color: ${props => props.theme.colors.darkBlue};
  align-items: ${props => (props.align ? `${props.align}` : "")};
  justify-content: ${props => (props.justify ? `${props.justify}` : "none")};
  ${props => props?.customStyle(props) ?? ""}
`;

export default Card;

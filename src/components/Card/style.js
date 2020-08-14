import styled from "styled-components";

const getSelectedBackground = props => {
  switch (props.bg) {
    case "alt":
      return props.theme.colors.lightBeige;
    case "secondary":
      return props.theme.colors.brand.yellow;
    case "terceary":
      return props.theme.colors.brand.lightBlue;
    default:
      return props.theme.colors.white;
  }
};

const Card = styled.div`
  display: flex;
  flex-flow: row-nowrap;
  padding: ${props => props.theme.margin}px;
  box-shadow: ${props => (props.shadow ? props.theme.boxShadow : 0)};
  background-color: ${props => getSelectedBackground(props)};
  color: ${props => props.theme.colors.darkBlue};
  align-items: ${props => (props.align ? `${props.align}` : "")};
  height: ${props => (props.hero ? `${props.theme.heroSize}px` : "none")};
  justify-content: ${props => (props.justify ? `${props.justify}` : "none")};
`;

export default Card;

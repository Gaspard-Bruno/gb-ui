import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-flow: row-nowrap;
  justify-content: flex-start;
  padding: ${(props) => props.theme.margin}px;
  box-shadow: ${(props) => (props.shadow ? props.theme.boxShadow : 0)};
  background-color: ${(props) =>
    props.bg === "alt"
      ? props.theme.colors.lightBeige
      : props.theme.colors.white};
  color: ${(props) => props.theme.colors.darkBlue};
  align-items: center;
  height: ${(props) => (props.hero ? `${props.theme.heroSize}px` : "none")};
`;

export default Card;

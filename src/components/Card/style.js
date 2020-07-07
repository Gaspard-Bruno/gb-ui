import styled from "styled-components";

const Card = styled.nav`
  display: flex;
  flex-flow: row-nowrap;
  justify-content: flex-start;
  padding: ${(props) => props.theme.margin};
  border-radius: 10;
  box-shadow: ${(props) => (props.shadow ? props.theme.boxShadow : 0)};
  background-color: ${(props) =>
    props.theme[props?.bg] || props.theme.brandColor};
  color: ${(props) => props.theme[props?.text] ?? props.theme.white};
  align-items: center;
`;

export default Card;

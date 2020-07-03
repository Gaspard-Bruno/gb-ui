import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: ${(props) => props.theme.white};
`;

const Title = styled.h1`
  font-weight: bold;
  text-decoration: none;
  color: ${(props) => props.theme.black};
  font-size: 37px;
`;

export default { Link: StyledLink, Title };

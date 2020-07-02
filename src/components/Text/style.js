import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: ${(props) => props.theme.white};
`;

export default { Link: StyledLink };

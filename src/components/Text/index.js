import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Link = styled(RouterLink)`
  font-weight: bold;
  text-decoration: none;
  color: ${(props) => props.theme.white};
`;

export const Title = styled.h1`
  font-weight: bold;
  line-height: 150%;
  font-family: "Space Grotesk";
  text-decoration: none;
  color: ${(props) => props.theme.black};
  font-size: 37px;
`;

export const SubTitle = styled.h2`
  font-weight: 600;
  line-height: 125%;
  color: ${(props) => props.theme.black};
  font-size: 18px;
`;

export const Label = styled.h3`
  font-weight: bold;
  font-family: Muli;
  line-height: 100%;
  text-transform: uppercase;
  color: ${(props) => props.theme.black};
  font-size: 14px;
`;

export const Text = styled.p`
  line-height: 125%;
  color: ${(props) => props.theme.black};
  font-size: 14px;
`;

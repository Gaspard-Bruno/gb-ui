import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Jumbo = styled.h1`
  font-family: Space Grotesk;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 64px;
  color: ${props => props.theme.colors.darkBlue};
`;

const headingSizes = [
  `
  font-size: 48px;
  line-height: 64px;
  `,
  `
  font-size: 32px;
  line-height: 40px;
  `,
  `
  font-size: 24px;
  line-height: 32px;
  `,
  `
  font-size: 20px;
  line-height: 24px;
  `,
  `
  font-size: 18px;
  line-height: 24px;
  `,
  `
  font-size: 16px;
  line-height: 24px;
  `
];

export const Heading = styled.h2`
  font-family: Space Grotesk;
  font-style: normal;
  font-weight: bold;
  ${props => (props.size ? headingSizes[props.size - 1] : headingSizes[0])}
  color: ${props => props.theme.colors.darkBlue};
`;

export const Body = styled.p`
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${props =>
    props.alt ? props.theme.colors.grey : props.theme.colors.darkBlue};
`;
export const SmallBody = styled.p`
  font-family: Muli;
  font-style: normal;
  font-weight: ${props => (props.bold ? "bold" : "normal")};
  font-size: 14px;
  line-height: 16px;
  color: ${props => props.theme.colors.darkBlue};
`;
export const Tiny = styled.h3`
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.darkBlue};
`;

export const Link = styled(RouterLink)`
  text-decoration: none;
  font-family: Space Grotesk;
  font-style: medium;
  font-weight: 500;
  color: ${props => props.theme.colors.darkBlue};
  font-size: 16px;
  line-height: 24px;
  :hover {
    color: ${props => props.theme.colors.grey};
  }
  :active {
    color: ${props => props.theme.colors.darkBlue};
  }
  :visited {
    color: ${props => props.theme.colors.darkBlue};
  }
`;

export const ButtonText = styled.span`
  text-decoration: none;
  font-family: Space Grotesk;
  font-style: medium;
  font-weight: 500;
  color: ${props => props.theme.colors.darkBlue};
  font-size: 16px;
  line-height: 24px;
  :hover {
    color: ${props => props.theme.colors.darkBlue};
  }
  :active {
    color: ${props => props.theme.colors.darkBlue};
  }
  :visited {
    color: ${props => props.theme.colors.darkBlue};
  }
`;

export const ErrorText = styled(SmallBody)`
  color: ${props => props.theme.feedback.error.default};
`;

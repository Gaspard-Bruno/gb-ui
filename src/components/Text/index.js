import styled from 'styled-components';
import React from 'react';
import get from 'lodash.get';

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
${({ theme }) => theme.fontPrimary()}
  font-style: normal;
  font-weight: bold;
  ${props => (props.size ? headingSizes[props.size - 1] : headingSizes[0])}
  color: ${props =>
    props.color
      ? get(props.theme?.colors, props.color, props.theme?.colors.text)
      : props.theme?.colors.text};
  ${props => props.center && `text-align: center`}
`;

export const SubHeading = styled.h3`
${({ theme }) => theme.fontPrimary()}
  font-style: normal;
  font-weight: bold;
  ${props => (props.size ? headingSizes[props.size - 1] : headingSizes[2])}
  color: ${props =>
    props.color
      ? get(props.theme?.colors, props.color, props.theme?.colors.text)
      : props.theme?.colors.text};
`;

export const Body = styled.p`
  ${({ theme }) => theme.fontPrimary()}
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${props =>
    props.alt ? props.theme?.colors.grey : props.theme?.colors.text};
`;
export const SmallBody = styled.p`
  ${({ theme }) => theme.fontPrimary()}
  font-style: normal;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-size: 14px;
  line-height: 16px;
  color: ${props =>
    props.color
      ? get(props.theme?.colors, props.color, props.theme?.colors.text)
      : props.theme?.colors.text};
`;
export const Tiny = styled.h3`
  ${({ theme }) => theme.fontPrimary()}
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${props =>
    props.color
      ? get(props.theme?.colors, props.color, props.theme?.colors.text)
      : props.theme?.colors.text};
`;

const StyledLink = styled.a`
  text-decoration: none;
  ${({ theme }) => theme.fontPrimary()}
  font-style: medium;
  font-weight: 500;
  display: block;
  line-height: 16px;
  font-size: 14px;
  color: ${props =>
    props.color
      ? get(props.theme?.colors, props.color, props.theme?.colors.text)
      : props.theme?.colors.text};
  font-size: 16px;
  line-height: 24px;
  :hover {
    color: ${props => props.theme?.colors.grey};
  }
  :active {
    color: ${props =>
      props.color
        ? get(props.theme?.colors, props.color, props.theme?.colors.text)
        : props.theme?.colors.text};
  }
  :visited {
    color: ${props =>
      props.color
        ? get(props.theme?.colors, props.color, props.theme?.colors.text)
        : props.theme?.colors.text};
  }
  :focus {
    color: ${props => props.theme?.colors.brand.red};
  }
`;
export const Link = ({ to, newTab, children }) => (
  <StyledLink href={to} target={newTab ? 'blank' : ''}>
    {children}
  </StyledLink>
);

export const ButtonText = styled.span`
  text-decoration: none;
  ${({ theme }) => theme.fontPrimary()}
  font-style: medium;
  font-weight: 500;
  color: ${props =>
    props.color
      ? get(props.theme?.colors, props.color, props.theme?.colors.text)
      : props.theme?.colors.text};
  font-size: 16px;
  line-height: 24px;
  :hover {
    color: ${props =>
      props.color
        ? get(props.theme?.colors, props.color, props.theme?.colors.text)
        : props.theme?.colors.text};
  }
  :active {
    color: ${props =>
      props.color
        ? get(props.theme?.colors, props.color, props.theme?.colors.text)
        : props.theme?.colors.text};
  }
  :visited {
    color: ${props =>
      props.color
        ? get(props.theme?.colors, props.color, props.theme?.colors.text)
        : props.theme?.colors.text};
  }
`;

export const ErrorText = styled(SmallBody)`
  color: ${props => props.theme.colors.feedback.error};
  transition: all 0.2s;
  opacity: ${props => (props.error ? 1 : 0)};
  margin: 0 !important;
`;

export default {
  Heading,
  SubHeading,
  Body,
  SmallBody,
  Tiny,
  Link,
  ButtonText,
  ErrorText
};

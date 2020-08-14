import styled from "styled-components";

const JumboContainer = styled.div`
  margin-top: ${props => props.theme.margin * 4.5}px;
  margin-bottom: ${props => props.theme.margin * 5.5}px;
`;

const BodyContainer = styled.div`
  margin-bottom: ${props => props.theme.margin * 2.5}px;
`;

export { JumboContainer, BodyContainer };

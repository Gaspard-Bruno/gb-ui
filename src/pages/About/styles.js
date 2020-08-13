import styled from "styled-components";
import { media } from "Components/Layout";
import theme from "Theme";
export const SubHeaderContainer = styled.div`
  text-align: center;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  ${media.tablet(`
    flex-direction: column
  `)}
  justify-content: center;
  & > div {
    align-items: flex-start;
    border: ${props => (props.borded ? "1px solid #D2CCC6" : "none")};
    box-sizing: ${props => (props.borded ? "border-box" : "none")};
    border-radius: ${props => (props.borded ? "20px" : "10px")};
    width: 368px;
    max-width: 368px;
    margin-right: 45px;
    margin-top: 20px;
  }
`;

export const ImageContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;

  img {
    ${media.tablet(`
    width: 1140px;
  `)}

    width: 1150px;
    margin: 0 auto;
    border-radius: 2px;
  }
`;

export const PartnersSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 900px«;
  justify-content: space-between;
  svg {
    max-width: 172px;
    max-height: 172px;
    margin-bottom: 24px;
  }
`;

export const SpecialistsSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  margin: ${theme.margin} 0px;
`;

export const SpecialistItemsListing = styled.nav`
  width: 368px;
  height: 185px;
  text-align: center;
  margin-top: 25px;
  h2 {
    margin-top: 12px;
    margin-bottom: 0px;
  }
  p {
    margin-top: 4px;
  }
`;

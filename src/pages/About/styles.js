import styled from "styled-components";

export const SubHeaderContainer = styled.div`
  text-align: center;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  & > div {
    align-items: flex-start;
    border: ${props => (props.borded ? "1px solid #D2CCC6" : "none")};
    box-sizing: ${props => (props.borded ? "border-box" : "none")};
    border-radius: ${props => (props.borded ? "20px" : "10px")};
    height: ${props => (props.borded ? "424px" : "auto")};
    width: 368px;
    margin-right: 45px;
    margin-top: 20px;
  }
`;

export const ImageContainer = styled.div`
  margin-top: 40px;
  & > img {
    border-radius: 2px;
    width: 1150px;
    height: 575px;
  }
`;

export const PartnersSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 1152px;
  margin-bottom: 80px;
  justify-content: space-between;
  svg {
    width: 172px;
    height: 172px;
    margin-bottom: 24px;
  }
`;

export const SpecialistsSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  margin-bottom: 92px;
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

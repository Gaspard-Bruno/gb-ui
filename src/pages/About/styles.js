import styled from "styled-components";

export const SubHeaderContainer = styled.div`
  text-align: center;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  & > div {
    align-self: center;
    border: ${props => (props.borded ? "1px solid #D2CCC6" : "none")};
    box-sizing: ${props => (props.borded ? "border-box" : "none")};
    border-radius: ${props => (props.borded ? "20px" : "10px")};
    height: ${props => (props.borded ? "424px" : "auto")};
    width: 368px;
    margin-right: 16px;
    margin-top: 56px;
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
  svg {
    width: 172px;
    height: 172px;
    margin-right: 24px;
    margin-bottom: 24px;
  }
`;

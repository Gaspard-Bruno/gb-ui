import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: row-nowrap;
  margin: 0 auto;
  justify-content: space-between;
  min-height: 53vh;
  max-height: 100vh;
  max-width: ${props => props.theme.maxWidth}px;
  background-color: ${props => props.theme.colors.white};
    @media only screen and (max-width: 375px) {
      maxwidth: 100%;
    }
  }
`;

const ContainerTNC = styled.div`
  display: flex;
  flex-flow: row-nowrap;
  margin: 0 auto;
  justify-content: space-between;
  min-height: 100vh;
  max-height: 200vh;
  max-width: ${props => props.theme.maxWidth}px;
  background-color: ${props => props.theme.colors.white};
    @media only screen and (max-width: 375px) {
      maxwidth: 100%;
    }
  }
`;

const AccordionContainer = styled.div`
  display: flex;
  padding-top: 5%;
  flex: 0.5;
  flex-flow: column;
  margin: 0 auto;
  justify-content: space-between;
`;

const LeftContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 3%;
  padding-bottom: 30%;
  flex-flow: column nowrap;
  flex: 0.3;
  > a {
    color: ${props => props.theme.colors.grey};
  }
`;

const LeftContainerTNC = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 3%;
  padding-bottom: 72.5%;
  flex-flow: column nowrap;
  flex: 0.3;
  > a {
    color: ${props => props.theme.colors.grey};
  }
`;

const RightContainer = styled.div`
  padding-top: 3%;
  display: flex;
  flex-flow: column nowrap;
  flex: 0.7;
  > p {
    margin: 0;
  }
  > h2 {
    margin: 0;
  }
  > .termsAndConditions {
    margin-top: 3%;
  }
  > .subTitle {
    margin-top: 5%;
  }
  > li {
    margin-bottom: 0;
  }
`;

export {
  Container,
  ContainerTNC,
  RightContainer,
  LeftContainer,
  LeftContainerTNC,
  AccordionContainer
};

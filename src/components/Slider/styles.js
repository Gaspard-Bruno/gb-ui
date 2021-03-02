import styled from "styled-components";

export const CarouselContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 105%;
  & > button {
    display: flex;
    margin: 0 auto;
    width: calc(100% / 5);
  }
`;
export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-around;
  outline: none;
`;

export const ItemImage = styled.img`
  width: 368px;
  height: 220px;
`;

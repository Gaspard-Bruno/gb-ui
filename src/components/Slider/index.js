import React from "react";
import Slider from "react-slick";
import Badge from "Components/Badge";
import { Heading } from "Components/Text";
import { Row } from "Components/Layout";
import { CarouselContainer, ItemContainer, ItemImage } from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";

const CardSlider = ({ list }) => {
  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0
  };
  return (
    <CarouselContainer>
      <Slider row slicesPerRow={3} {...settings}>
        {renderItems(list)}
      </Slider>
    </CarouselContainer>
  );
};

const renderItems = items => {
  const list =
    items &&
    items.map((item, index) => {
      return (
        <ItemContainer key={`${item.category}-${index}`}>
          <ItemImage alt="" src={item.img} />
          <Row justify="flex-start">
            <Badge
              text={item.category}
              category={item.category}
              onClick={item.action}
            />
          </Row>
          <Heading size={6}>{item.text}</Heading>
        </ItemContainer>
      );
    });
  return list;
};

CardSlider.propTypes = {
  list: PropTypes.array.isRequired,
  hasButton: PropTypes.bool
};

export default CardSlider;

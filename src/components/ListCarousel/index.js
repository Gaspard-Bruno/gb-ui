import React from "react";
import Slider from "react-slick";
import Badge from "Components/Badge";
import { Heading } from "Components/Text";
import { Row } from "Components/Layout";
import { CarouselContainer, ItemContainer, ItemImage } from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";

const ListCarousel = ({ list }) => {
  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <CarouselContainer>
      <Slider {...settings}>{renderItems(list)}</Slider>
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
          <Badge
            text={item.category}
            category={item.category}
            onClick={item.action}
          />
          <Row>
            <Heading size={6}>{item.text}</Heading>
          </Row>
        </ItemContainer>
      );
    });
  return list;
};

ListCarousel.prototype = {
  list: PropTypes.array.isRequired
};

export default ListCarousel;

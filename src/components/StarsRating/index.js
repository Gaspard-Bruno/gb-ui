import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from '../Layout';
import { SmallBody } from '../Text';
import Icon from '../Icon';

import { StyledIconButton } from './style';

const StarsRating = ({
  defaultRating,
  isInteractive,
  maxRating = 5,
  starSize = 24,
  color = '#FEC35A',
  onHoverColor = '#171F46',
  onChangeRating,
  labels
}) => {
  const [rating, setRating] = useState(defaultRating);
  const [hoveredRating, setHoveredRating] = useState(-1);
  const isHovered = idx =>
    isInteractive && hoveredRating >= idx ? onHoverColor : '';
  const handleSetRating = rating => {
    if (isInteractive) {
      setRating(rating);
      if (onChangeRating) {
        onChangeRating(rating);
      }
    }
  };
  const stars = [];
  for (let i = 0; i < maxRating; i += 1) {
    if (isHovered(i)) {
      stars.push(
        <StyledIconButton
          onClick={() => handleSetRating(i + 1)}
          onMouseEnter={() => setHoveredRating(i)}
          onMouseLeave={() => setHoveredRating(-1)}
          isInteractive={isInteractive}
          onHoverColor={isHovered(i)}
        >
          <Icon size={starSize} name='star-Filled' color={onHoverColor} />
        </StyledIconButton>
      );
      continue;
    }
    if (i + 0.5 === rating) {
      stars.push(
        <StyledIconButton
          onClick={() => handleSetRating(i + 1)}
          onMouseEnter={() => setHoveredRating(i)}
          onMouseLeave={() => setHoveredRating(-1)}
          isInteractive={isInteractive}
          onHoverColor={isHovered(i)}
        >
          <Icon size={starSize} name='Star-Half' color={color} />
        </StyledIconButton>
      );
      continue;
    }
    if (rating > i) {
      stars.push(
        rating >= i + 0.5 ? (
          <StyledIconButton
            onClick={() => handleSetRating(i + 1)}
            onMouseEnter={() => setHoveredRating(i)}
            onMouseLeave={() => setHoveredRating(-1)}
            isInteractive={isInteractive}
            onHoverColor={isHovered(i)}
          >
            <Icon size={starSize} name={'star-Filled'} color={color} />
          </StyledIconButton>
        ) : (
          <StyledIconButton
            onClick={() => handleSetRating(i + 1)}
            onMouseEnter={() => setHoveredRating(i)}
            onMouseLeave={() => setHoveredRating(-1)}
            isInteractive={isInteractive}
            onHoverColor={isHovered(i)}
          >
            <Icon size={starSize} name='star' color={color} />
          </StyledIconButton>
        )
      );
      continue;
    } else {
      stars.push(
        <StyledIconButton
          isInteractive={isInteractive}
          onClick={() => handleSetRating(i + 1)}
          onMouseEnter={() => setHoveredRating(i)}
          onMouseLeave={() => setHoveredRating(-1)}
          onHoverColor={isHovered(i)}
        >
          <Icon size={starSize} name='star' color={color} />
        </StyledIconButton>
      );
      continue;
    }
  }

  return (
    <Col>
      <Row justify={labels && labels.length && 'space-between'} noWrap>
        {stars}
      </Row>
      {labels && (
        <Row justify='space-between'>
          {labels.map(l => (
            <SmallBody key={'stars-labels' + l}>{l}</SmallBody>
          ))}
        </Row>
      )}
    </Col>
  );
};

StarsRating.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string),
  isInteractive: PropTypes.bool,
  onChangeRating: PropTypes.func,
  defaultRating: PropTypes.number,
  starSize: PropTypes.number,
  color: PropTypes.string,
  onHoverColor: PropTypes.string,
  maxRating: PropTypes.number
};

StarsRating.defaultProps = {
  isInteractive: false,
  color: '#FEC35A',
  onHoverColor: '#171F46',
  starSize: 24,
  maxRating: 5,
  defaultRating: 0
};
export default StarsRating;

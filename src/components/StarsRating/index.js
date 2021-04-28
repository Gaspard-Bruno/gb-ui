import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row } from '../Layout';
import Icon from '../Icon';

import { StyledIconButton } from './style';

const StarsRating = ({
  defaultRating,
  isInteractive,
  maxRating = 5,
  color = '#FEC35A',
  onHoverColor = '#171F46'
}) => {
  const [rating, setRating] = useState(defaultRating);
  const [hoveredRating, setHoveredRating] = useState(-1);
  const isHovered = idx =>
    isInteractive && hoveredRating >= idx ? onHoverColor : '';
  const handleSetRating = rating => {
    if (isInteractive) {
      setRating(rating);
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
          <Icon name='star-Filled' color={onHoverColor} />
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
          <Icon name='Star-Half' color={color} />
        </StyledIconButton>
      );
      continue;
    }
    if (rating > i) {
      stars.push(
        <StyledIconButton
          onClick={() => handleSetRating(i + 1)}
          onMouseEnter={() => setHoveredRating(i)}
          onMouseLeave={() => setHoveredRating(-1)}
          isInteractive={isInteractive}
          onHoverColor={isHovered(i)}
        >
          <Icon name='star-Filled' color={color} />
        </StyledIconButton>
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
          <Icon name='star' color={color} />
        </StyledIconButton>
      );
      continue;
    }
  }

  return <Row noWrap>{stars}</Row>;
};

StarsRating.propTypes = {
  isInteractive: PropTypes.bool,
  defaultRating: PropTypes.number,
  color: PropTypes.string,
  onHoverColor: PropTypes.string,
  maxRating: PropTypes.number
};

StarsRating.defaultProps = {
  isInteractive: false,
  color: '#FEC35A',
  onHoverColor: '#171F46',
  maxRating: 5,
  defaultRating: 0
};
export default StarsRating;

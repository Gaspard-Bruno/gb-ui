import React from 'react';
import PropTypes from 'prop-types';

import t from '../utils/translation';

import { SmallBody } from '../Text';
import Icon from '../Icon';
import StyledBadge, { getBadgeColorFromStatus } from './style';

const Badge = ({
  status = 'active',
  category,
  isChip,
  onClick,
  text,
  translate,
  className
}) => {
  return (
    text && (
      <StyledBadge
        className={className}
        onClick={onClick}
        status={category || status}
        chip={isChip}
      >
        <SmallBody>{t(translate, text)}</SmallBody>
        {isChip && <Icon name='Close' size={12} />}
      </StyledBadge>
    )
  );
};

Badge.propTypes = {
  onClick: PropTypes.func,
  translate: PropTypes.func,
  status: PropTypes.string,
  category: PropTypes.string,
  isChip: PropTypes.bool,
  text: PropTypes.string
};
export { getBadgeColorFromStatus };

export default Badge;

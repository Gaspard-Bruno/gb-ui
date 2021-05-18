import React from 'react';
import PropTypes from 'prop-types';

import StyledIcoMoon from './style'
import iconSet from 'Assets/fonts/icons/icons.json';

const Icon = ({ name, color, ...props }) => (
  <StyledIcoMoon
    iconSet={iconSet}
    title={name}
    icon={name}
    color={color}
    {...props}
  />
);

Icon.propTypes = {
  name: PropTypes.string
};

Icon.defaultProps = {
  size: 24
};

export default Icon;

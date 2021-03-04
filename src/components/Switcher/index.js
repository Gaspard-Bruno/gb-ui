import React from 'react';

import PropTypes from 'prop-types';

import StyledSwitcher, { InnerToggle } from './style';

const Switcher = ({ checked, disabled, action }) => {
  const handleClick = () => {
    if (!disabled) {
      action(!checked);
    }
  };

  return (
    <StyledSwitcher checked={checked} disabled={disabled} onClick={handleClick}>
      <InnerToggle checked={checked} disabled={disabled} />
    </StyledSwitcher>
  );
};

Switcher.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  action: PropTypes.func
};

export default Switcher;

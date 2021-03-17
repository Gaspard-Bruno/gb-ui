import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

import StyledCheckbox, {
  CheckboxContainer,
  HiddenCheckbox,
  IconContainer
} from './style';

const Checkbox = ({ checked, action, disabled }) => {
  const handleCheck = () => {
    if (!disabled) {
      action();
    }
  };

  return (
    <CheckboxContainer onClick={handleCheck}>
      <HiddenCheckbox checked={checked} />
      <StyledCheckbox checked={checked} />
      <IconContainer checked={checked}>
        <Icon name='Check' />
      </IconContainer>
    </CheckboxContainer>
  );
};

export default Checkbox;

Checkbox.propTypes = {
  checked: PropTypes.bool,
  action: PropTypes.func,
  disabled: PropTypes.bool
}
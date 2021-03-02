import React from 'react';

import Icon from '../Icon';

import StyledCheckbox, {
  CheckboxContainer,
  HiddenCheckbox,
  IconContainer
} from './style';

const Checkbox = ({ checked, action }) => {
  const handleCheck = () => {
    action();
    console.log(checked);
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

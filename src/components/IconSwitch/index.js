import React, { useState } from 'react'
import PropTypes from 'prop-types';

import Icon from '../Icon';

import StyledSwitch, { Left, Right } from './style';

const IconSwitch = ({ leftChecked=true, leftIcon, rightIcon, onChange }) => {
  const [checked, setChecked] = useState(leftChecked)

  const handleChange = () => {
    // onChange(!checked)
    setChecked(!checked)
    onChange();
  }

  return (
    <StyledSwitch>
        <Left active={checked} onClick={handleChange}>
            <Icon name={leftIcon}/>
        </Left>

        <Right active={!checked} onClick={handleChange}>
            <Icon name={rightIcon} />
        </Right>

    </StyledSwitch>
  )
}

IconSwitch.propTypes = {
    leftChecked: PropTypes.bool,
    onChange: PropTypes.func,
    leftIcon: PropTypes.string,
    rightIcon: PropTypes.string
  };

IconSwitch.defaultProps = {
    leftIcon: "kanban",
    rightIcon: "List"
};


export default IconSwitch


import React, { useState } from 'react'
import PropTypes from 'prop-types';

import Icon from 'Components/Icon';

import StyledSwitch, { Left, Right } from './style';

const IconSwitch = ({ leftChecked=false, leftIcon, rightIcon, onChange }) => {
  const [checked, setChecked] = useState(leftChecked)

  const handleChange = () => {
    // onChange(!checked)
    setChecked(!checked)
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

    // <div className="switch-component">
    //   { label &&
    //     <p className="switch-label">{label}</p>
    //   }
    //   <label className="switch">
    //     <input type="checkbox" checked={checked} onChange={handleChange}/>
    //     <span className="slider round"/>
    //   </label>
    // </div>
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


import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import { Body } from '../Text';

import {
  ButtonGroupContainer,
  StyledButton,
  StyledContainer,
  ListContainer
} from './styles';

const ButtonGroup = ({ action, label, name, list }) => {
  const [selectedButtons, setSelectedTab] = useState(
    list.map(li => ({ [li.value]: li.isSelected }))
  );

  const handleSelection = useCallback(
    (key, isSelected) => {
      setSelectedTab({
        ...selectedButtons,
        [key]: isSelected
      });
    },
    [selectedButtons]
  );
  return (
    <StyledContainer>
      {<Body>{label || ''}</Body>}
      <ListContainer>
        {list &&
          list.map((item, index) => {
            return (
              <ButtonGroupContainer
                isSelected={selectedButtons[index]}
                key={`${item}-${index}`}
              >
                {item.label && <Body>{item.label}</Body>}
                <StyledButton
                  key={`${item}-${index}`}
                  item
                  type='button'
                  label={item.label}
                  name={name}
                  disabled={item.disabled}
                  isSelected={selectedButtons[index]}
                  onClick={() => {
                    handleSelection(item.value, !selectedButtons[item.value]);
                    if (action) {
                      action({ name, value: selectedButtons });
                    }
                  }}
                ></StyledButton>
              </ButtonGroupContainer>
            );
          })}
      </ListContainer>
    </StyledContainer>
  );
};

ButtonGroup.propTypes = {
  action: PropTypes.func,
  label: PropTypes.string,
  list: PropTypes.array,
  name: PropTypes.string
};

export default ButtonGroup;

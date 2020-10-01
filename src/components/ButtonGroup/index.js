import React, { useCallback, useState } from 'react';
import { ButtonGroupContainer, StyledButton, StyledContainer } from './styles';
import PropTypes from 'prop-types';
import { Body } from 'Components/Text';

const ButtonGroup = ({ action, label, name, list }) => {
  const getInitialSelection = () => {
    const selectedItems = {};
    for (let i in list) {
      selectedItems[list[i].value] = list[i].isSelected;
    }
    return selectedItems;
  };

  const [selectedButtons, setSelectedTab] = useState(getInitialSelection(list));

  const handleSelection = useCallback(
    (value, isSelected) => {
      const newSelection = Object.assign(
        {},
        selectedButtons,
        (selectedButtons[value] = !selectedButtons[value])
      );
      setSelectedTab(newSelection);
    },
    [selectedButtons]
  );

  return (
    <StyledContainer>
      {label && <Body>{label}</Body>}
      {list &&
        list.map((item, index) => {
          return (
            <ButtonGroupContainer
              isSelected={selectedButtons[index]}
              key={`${item}-${index}`}
            >
              {item.label && (
                <Body
                  onClick={() => handleSelection(item.value, item.isSelected)}
                >
                  {item.label}
                </Body>
              )}
              <StyledButton
                key={`${item}-${index}`}
                item
                type='button'
                label={item.label}
                value={item.value}
                name={name}
                disabled={item.disabled}
                isSelected={selectedButtons[index]}
                onClick={() => {
                  handleSelection(item.value, item.isSelected);
                  if (action) {
                    action({ name, value: selectedButtons });
                  }
                }}
              ></StyledButton>
            </ButtonGroupContainer>
          );
        })}
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

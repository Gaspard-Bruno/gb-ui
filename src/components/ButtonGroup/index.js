import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import { Body, ErrorText } from '../Text';

import {
  ButtonGroupContainer,
  StyledButton,
  StyledContainer,
  ListContainer
} from './styles';
const ButtonGroup = ({ action, title, name, list, value, error }) => {
  const filteredList = listToFilter => {
    const newList = {};
    for (let i = 0; i < listToFilter.length; i++) {
      newList[i] = listToFilter[i].isSelected;
    }
    return newList;
  };

  const [selectedButtons, setSelectedTab] = useState(
    value || filteredList(list)
  );

  const handleSelection = useCallback(
    (key, isSelected) => {
      const newVals = {
        ...selectedButtons,
        [key]: isSelected
      };
      setSelectedTab(newVals);
      if (action) {
        action({ name, value: newVals });
      }
    },
    [action, name, selectedButtons]
  );

  const labels = ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'];
  return (
    <StyledContainer>
      {title && <Body>{title}</Body>}
      <ListContainer>
        {list &&
          list.map((item, index) => {
            return (
              <ButtonGroupContainer
                isSelected={selectedButtons[index]}
                key={`${item}-${index}`}
                onClick={() => {
                  handleSelection(item.value, !selectedButtons[item.value]);
                }}
              >
                <Body>{labels[index]}</Body>
                <StyledButton
                  key={`${item}-${index}`}
                  item
                  type='button'
                  name={name}
                  disabled={item.disabled}
                  isSelected={selectedButtons[index]}
                  onClick={() => {
                    handleSelection(item.value, !selectedButtons[item.value]);
                  }}
                ></StyledButton>
              </ButtonGroupContainer>
            );
          })}
      </ListContainer>
      {error && <ErrorText>{error}</ErrorText>}
    </StyledContainer>
  );
};

ButtonGroup.propTypes = {
  action: PropTypes.func,
  title: PropTypes.string,
  list: PropTypes.array,
  name: PropTypes.string,
  value: PropTypes.object,
  error: PropTypes.string
};

export default ButtonGroup;

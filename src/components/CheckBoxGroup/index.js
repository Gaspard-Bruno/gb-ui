import React, { useState, useEffect, useCallback } from 'react';
import {
  StyledContainer,
  StyledCheckbox,
  CheckboxGroudContainer
} from './styles';
import PropTypes from 'prop-types';
import { Body, ErrorText } from 'Components/Text';

const CheckBoxGroup = ({ name, label, list, error, action }) => {
  const checkedItems = list;
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItems = (name, event) => {
    const itemIndex = checkedItems.indexOf(
      checkedItems.find(e => e.question === event)
    );
    checkedItems[itemIndex].isSelected = !list[itemIndex].isSelected;
    if (action) action({ [name]: checkedItems });
  };

  return (
    <StyledContainer>
      {label && <Body>{label}</Body>}
      {list &&
        list.map((item, index) => {
          return (
            <CheckboxGroudContainer key={`${item}-${index}`}>
              <StyledCheckbox
                type='checkbox'
                checked={selectedItems.isSelected}
                name={name}
                onChange={() => handleItems(name, item?.question)}
                key={index}
              ></StyledCheckbox>
              {item.question && <Body>{item.question}</Body>}
              {error && <ErrorText>{error}</ErrorText>}
            </CheckboxGroudContainer>
          );
        })}
    </StyledContainer>
  );
};

CheckBoxGroup.propTypes = {
  action: PropTypes.func,
  childAction: PropTypes.func,
  label: PropTypes.string,
  list: PropTypes.array,
  name: PropTypes.string,
  error: PropTypes.string
};

export default CheckBoxGroup;
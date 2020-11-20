import React from 'react';
import {
  StyledContainer,
  StyledCheckbox,
  CheckboxGroupContainer
} from './styles';
import PropTypes from 'prop-types';
import { Body, ErrorText } from '../Text';

const CheckBoxGroup = ({ name, label, list, error, action }) => {
  const checkedItems = list;
  const handleItems = (name, event) => {
    const itemIndex = checkedItems.indexOf(
      checkedItems.find(e => e.question === event)
    );
    checkedItems[itemIndex].isSelected = !list[itemIndex].isSelected;
    if (action) action(checkedItems);
  };
  return (
    <StyledContainer>
      {label && <Body>{label}</Body>}
      {error && <ErrorText>{error}</ErrorText>}
      {list &&
        list.map((item, index) => {
          return (
            <CheckboxGroupContainer key={`${item}-${index}`}>
              <StyledCheckbox
                type='checkbox'
                checked={item.isSelected}
                name={name}
                onChange={() => handleItems(name, item?.question)}
                key={index}
              ></StyledCheckbox>
              {item.question && <Body>{item.question}</Body>}
            </CheckboxGroupContainer>
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

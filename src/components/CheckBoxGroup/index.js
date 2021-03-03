import React from 'react';
import {
  StyledContainer,
  StyledCheckbox,
  CheckboxGroupContainer
} from './styles';
import PropTypes from 'prop-types';
import { Body, ErrorText } from '../Text';

const CheckBoxGroup = ({ name, label, list, error, action }) => {
  const handleItems = (name, event) => {
    const itemIndex = list.indexOf(list.find(e => e.question === event));
    const newList = [...list];
    newList[itemIndex].isSelected = !list[itemIndex].isSelected;
    if (action) action(newList);
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
              {item.question && (
                <Body
                  dangerouslySetInnerHTML={{ __html: item.question }}
                ></Body>
              )}
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

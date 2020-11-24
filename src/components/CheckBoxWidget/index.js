import React from 'react';
import {
  StyledContainer,
  StyledCheckbox,
  CheckboxWidgetContainer,
  ContentRow
} from './styles';
import PropTypes from 'prop-types';
import { Body, ErrorText } from '../Text';
import Select from '../Select';
import TextInput from '../TextInput';

const CheckBoxWidget = ({
  name,
  label,
  list,
  error,
  action,
  content,
  defaultValues
}) => {
  const checkedItems = content && defaultValues ? defaultValues : list;
  const handleItems = (name, event) => {
    const itemIndex = checkedItems.indexOf(
      checkedItems.find(e => e.question === event)
    );

    checkedItems[itemIndex].isSelected = !list[itemIndex].isSelected;

    if (action) action(checkedItems);
  };

  const setOptionalValue = (name, event) => {
    const itemIndex = defaultValues.indexOf(
      defaultValues.find(e => e.question === event?.item)
    );
    const itemPlace = typeof event?.value === 'string' ? 'other' : name;
    defaultValues[itemIndex][`${itemPlace}`] = event?.value;
    if (action) action(defaultValues);
  };

  return (
    <StyledContainer>
      {label && <Body>{label}</Body>}
      {error && <ErrorText>{error}</ErrorText>}
      {list &&
        list.map((item, index) => {
          return (
            <CheckboxWidgetContainer key={`${item}-${index}`}>
              <StyledCheckbox
                type='checkbox'
                checked={item.isSelected}
                name={name}
                onChange={() => handleItems(name, item?.question)}
                key={index}
              ></StyledCheckbox>
              {item.question && <Body>{item.question}</Body>}
              <ContentRow>
                {item.isSelected && item?.isSelectable && (
                  <TextInput
                    onChange={value =>
                      setOptionalValue(`${content?.key}`, {
                        item: item?.question,
                        value
                      })
                    }
                  />
                )}
                {content && item.isSelected ? (
                  <Select
                    label={content?.label}
                    options={content?.options}
                    onChange={values =>
                      setOptionalValue(`${content?.key}`, {
                        item: item?.question,
                        value: values.value
                      })
                    }
                  />
                ) : null}
              </ContentRow>
            </CheckboxWidgetContainer>
          );
        })}
    </StyledContainer>
  );
};

CheckBoxWidget.propTypes = {
  action: PropTypes.func,
  childAction: PropTypes.func,
  label: PropTypes.string,
  list: PropTypes.array,
  name: PropTypes.string,
  error: PropTypes.string,
  content: PropTypes.object,
  defaultValues: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default CheckBoxWidget;

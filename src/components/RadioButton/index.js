import React, { useState } from "react";
import {
  StyledContainer,
  StyledRadio,
  RadioGroudContainer,
  SplitSelectContainer,
  FocusedRadio
} from "./styles";
import PropTypes from "prop-types";
import Select from "../Select";
import { Body, ErrorText } from "../Text";
import TextInput from "../TextInput";

const RadioButton = ({
  align,
  isVerticalAligned,
  action,
  label,
  name,
  list,
  error
}) => {
  const [selectedButton, setSelectedTab] = useState(null);

  return (
    <StyledContainer>
      {label && <Body>{label}</Body>}
      {list &&
        list.map((item, index) => {
          return (
            <RadioGroudContainer
              align={align}
              isVerticalAligned={isVerticalAligned}
              key={`${item}-${index}`}
            >
              <StyledRadio
                type="button"
                name={name}
                isSelected={index === selectedButton}
                onClick={event => {
                  setSelectedTab(index);
                  if (action) {
                    action({
                      name,
                      value: item.key || item.label.toLowerCase()
                    });
                  }
                }}
                key={index}
              >
                <FocusedRadio isSelected={index === selectedButton} />
              </StyledRadio>
              <Body name={item.key}>{item.label}</Body>
              {error && <ErrorText>{error}</ErrorText>}
            </RadioGroudContainer>
          );
        })}
    </StyledContainer>
  );
};

RadioButton.propTypes = {
  align: PropTypes.string,
  isVerticalAligned: PropTypes.bool,
  action: PropTypes.func,
  childAction: PropTypes.func,
  label: PropTypes.string,
  list: PropTypes.array,
  name: PropTypes.string,
  error: PropTypes.string
};

export default RadioButton;

import styled from "styled-components";
import ReactSelect from "react-select";
import theme from "Theme";

export const SelectContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  color: ${props =>
    props.error
      ? props.theme.colors.feedback.error.default
      : props.theme.colors.darkBlue};
  > p {
    margin: ${props => props.theme.margin / 2}px 0;
  }
`;
export const selectStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: "100%",
    filter: "drop-shadow(0px 4px 13px rgba(193, 188, 183, 0.3))",
    border: `1px solid ${theme.colors.mediumBeige}`,
    marginTop: 3,
    borderRadius: 2
  }),
  indicatorSeparator: () => ({
    display: "none"
  }),
  input: (provided, { isFocused }) => ({
    ...provided,
    minWidth: "150px"
  }),
  control: (provided, { isFocused, isDisabled, ...state }) => ({
    ...provided,
    borderRadius: 2,
    height: 48,
    backgroundColor: isDisabled ? theme.colors.lightBeige : theme.colors.white,
    color: theme.colors.grey,
    boxShadow: "none",
    borderColor: isFocused ? theme.colors.darkBlue : theme.colors.mediumBeige,
    "&:hover": {
      borderColor: isFocused ? theme.colors.darkBlue : theme.colors.mediumBeige
    }
  }),
  option: (provided, state) => {
    const color = state.isDisabled ? theme.colors.grey : theme.colors.darkBlue;
    const backgroundColor = theme.colors.white;
    const transition = "opacity 300ms";

    return {
      ...provided,
      color,
      transition,
      backgroundColor,
      "&:hover": {
        backgroundColor: theme.colors.lightBeige
      }
    };
  }
};

const Select = styled(ReactSelect)`
  color: ${props =>
    props.error
      ? props.theme.colors.feedback.error.default
      : props.theme.colors.mediumBeige};
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  input {
    font-family: Muli;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
  }
`;

export default Select;

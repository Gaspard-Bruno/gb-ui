import React, { useState } from "react";
import PropTypes from "prop-types";

import { useTranslate } from "polyglot-react-redux-sdk";
import Icon from "Components/Icon";
import Select from "Components/Select";

import StyledFilterButton, {
  CloseContainer,
  FilterTitle,
  Dropdown
} from "./style";

const getIconName = filterLabel => {
  switch (filterLabel.label) {
    case "responsible":
      return "User";
    case "date":
      return "calendar";
    case "service":
      return "tool-1";
    case "status":
      return "activity";
    case "region":
      return "Language";
    default:
      return "User";
  }
};

const getFilterOptions = filter => {
  switch (filter.label) {
    case "responsible":
      return [
        { label: "Admin1", value: "admin1" },
        { label: "Admin2", value: "admin1" },
        { label: "Admin3", value: "admin1" }
      ];
    case "date":
      return "calendar";
    case "service":
      return ["Service1", "Service2", "Service3", "Service4"];
    case "status":
      return ["Status1", "Status2"];
    case "region":
      return "Language";
    default:
      return "User";
  }
};

const FilterButton = ({
  filter,
  filterLabel,
  filterValue,
  onChange,
  onClose
}) => {
  const t = useTranslate("filters");

  const [showDropdown, setShowDropdown] = useState(false);

  const options = getFilterOptions(filter);

  const handleOpen = e => {
    setShowDropdown(!showDropdown);
  };

  return (
    <StyledFilterButton>
      <FilterTitle filterLabel={filterLabel}>
        <Icon name={getIconName(filterLabel)} />
        <span>{t(filterLabel)}:</span>
      </FilterTitle>

      <div onClick={e => handleOpen(e)}>
        {/* {filterValue ?
                <>{filterValue}</>
            :
                <>Todos</>
            }  */}
        Todo
        <Icon name="chevron-down" />
      </div>

      <CloseContainer onClick={e => onClose(filter)}>
        <Icon name="Close" />
      </CloseContainer>

      {showDropdown && (
        <Dropdown length={options.length}>
          {/* <Search /> */}
          <Select options={options} onChange={e => onChange(e, filter)} />
        </Dropdown>
      )}
    </StyledFilterButton>
  );
};

FilterButton.propTypes = {
  filterType: PropTypes.oneOf([
    "responsible",
    "date",
    "service",
    "status",
    "region"
  ]),
  filterValue: PropTypes.oneOf([PropTypes.string, PropTypes.object]),
  options: PropTypes.array,
  onChange: PropTypes.func,
  onClose: PropTypes.func
  // leftIcon: PropTypes.string,
  // rightIcon: PropTypes.string
};

FilterButton.defaultProps = {
  // leftIcon: "kanban",
  // rightIcon: "List"
};

export default FilterButton;
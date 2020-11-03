import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import Select from '../Select';
import Button from '../Button';

import StyledFilterButton, {
  CloseContainer,
  FilterLabel,
  FilterTitle,
  Dropdown
} from './style';

const getIconName = filterLabel => {
  switch (filterLabel.label) {
    case 'responsible':
      return 'User';
    case 'date':
      return 'calendar';
    case 'service':
      return 'tool-1';
    case 'status':
      return 'activity';
    case 'region':
      return 'Language';
    default:
      return 'User';
  }
};

const getFilterOptions = filter => {
  switch (filter.label) {
    case 'responsible':
      return [
        { label: 'Admin1', value: 'admin1' },
        { label: 'Admin2', value: 'admin1' },
        { label: 'Admin3', value: 'admin1' }
      ];
    case 'date':
      return 'calendar';
    case 'service':
      return ['Service1', 'Service2', 'Service3', 'Service4'];
    case 'status':
      return ['Status1', 'Status2'];
    case 'region':
      return 'Language';
    default:
      return 'User';
  }
};

const FilterButton = ({
  filter,
  filterLabel,
  translate,
  filterValue,
  onChange,
  onClose
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const options = getFilterOptions(filter);

  const handleOpen = e => {
    setShowDropdown(!showDropdown);
  };

  return (
    <StyledFilterButton>
      <FilterTitle filterLabel={filterLabel}>
        <Icon name={getIconName(filterLabel)} />
        <FilterLabel>{filterLabel}</FilterLabel>
      </FilterTitle>

      <Button onClick={e => handleOpen(e)} icon='chevron-down' />

      <CloseContainer onClick={e => onClose(filter)}>
        <Icon name='Close' />
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
    'responsible',
    'date',
    'service',
    'status',
    'region'
  ]),
  filterValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  filterLabel: PropTypes.string,
  translate: PropTypes.func,
  options: PropTypes.array,
  onChange: PropTypes.func,
  onClose: PropTypes.func
  // leftIcon: PropTypes.string,
  // rightIcon: PropTypes.string
};

FilterButton.defaultProps = {
  translate: () => console.log('Changed Filters')
  // leftIcon: "kanban",
  // rightIcon: "List"
};

export default FilterButton;

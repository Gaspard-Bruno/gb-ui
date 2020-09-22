import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';

import Search from "Components/Search";
import Select from "Components/Select";
import FilterButton from "Components/FilterButton";
import IconSwitch from "Components/IconSwitch";

import StyledFilterBar, { Header, Filters, Selects } from "./style";

const FilterBar = ({ availableFilters, showLayout, updateFilterHeight, handleLayoutChange }) => {
  const [activeFilters, setActiveFilters] = useState([]);

  const handleQuery = newQuery => {
    // action to update query on reducer
    // setQuery(newQuery)
  };

  const handleToggleFilters = newFilter => {
    let filters = activeFilters;

    if (filters.indexOf(newFilter) === -1) {
      filters = filters.concat(newFilter);
    } else {
      filters = filters.filter(filter => filter !== newFilter);
    }
    setActiveFilters(filters);
  };

  const handleFilterValues = (e, filter) => {
    let newFilters = activeFilters.filter(
      filter => filter.label !== filter.label
    );
    let newFilter = { label: filter.label, value: e.label };
    newFilters = newFilters.concat(newFilter);
    setActiveFilters(newFilters);
  };

  useEffect(() => {
    if (updateFilterHeight) { updateFilterHeight() };
  }, [activeFilters])

  return (
    <StyledFilterBar>
        <Header>
            <Selects>
                <Search style="service" onChange={handleQuery} />
                <Select 
                  placeholder="Filtros"
                  options={availableFilters} 
                  onChange={handleToggleFilters} />
            </Selects>
            {showLayout && 
              <IconSwitch switchType="layout" onChange={handleLayoutChange}/>
            }
        </Header>

      <Filters>
        {activeFilters &&
          activeFilters.map(filter => {
            return (
              <FilterButton
                filter={filter}
                key={`${filter.label}-filter`}
                filterLabel={filter.label}
                filterValue={filter.value}
                onClose={handleToggleFilters}
                onChange={handleFilterValues}
              />
            );
          })}
      </Filters>
    </StyledFilterBar>
  );
};

FilterBar.propTypes = {
    availableFilters: PropTypes.arrayOf(
        PropTypes.oneOf([
            "responsible",
            "date",
            "service",
            "status",
            "region",
        ])
    ),
    showLayout: PropTypes.bool,
    handleLayoutChange: PropTypes.func
  };
  
FilterBar.defaultProps = {
  // leftIcon: "kanban",
  // rightIcon: "List"
};

export default FilterBar;

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

import Icon from 'Components/Icon';
import Search from 'Components/Search';
import Select from 'Components/Select';
import FilterButton from 'Components/FilterButton';
import IconSwitch from 'Components/IconSwitch';

import StyledFilterBar, { Header, Filters, Selects } from './style';

const admin = {
    fullName: "Elena"
  };

const FilterBar = ({ availableFilters }) => {
  const [activeFilters, setActiveFilters] = useState([]);

  const handleQuery = (newQuery) => {
      console.log('newQuery', newQuery)
      // action to update query on reducer
    // setQuery(newQuery)
  }

  const handleToggleFilters = (newFilter) => {
    console.log("new filterrrrrr", newFilter)
    let filters = activeFilters;

    if (filters.indexOf(newFilter) === -1) {
      filters = filters.concat(newFilter)
    } else {
      filters = filters.filter(filter => filter !== newFilter)
    };
    setActiveFilters(filters);
  }
 
  const handleFilterValues = (e, filter) => {
    console.log("handlin shit")
    console.log(e)
    console.log(filter)

    let newFilters = activeFilters.filter(filter => filter.label !== filter.label)
    let newFilter = {label: filter.label, value: e.label}
    newFilters = newFilters.concat(newFilter)
    setActiveFilters(newFilters);
  }

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
            <IconSwitch switchType="layout"/>
        </Header>

        <Filters>
            {activeFilters && activeFilters.map(filter => {
                    return (
                        <FilterButton 
                            filter={filter}
                            filterLabel={filter.label} 
                            filterValue={filter.value}
                            onClose={handleToggleFilters}
                            onChange={handleFilterValues}
                        />
                    )
                })
            }        
        </Filters>

    </StyledFilterBar>

  )
}

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
    // leftChecked: PropTypes.bool,
    // onChange: PropTypes.func,
    // leftIcon: PropTypes.string,
    // rightIcon: PropTypes.string
  };
  
FilterBar.defaultProps = {
    // leftIcon: "kanban",
    // rightIcon: "List"
};
  

export default FilterBar

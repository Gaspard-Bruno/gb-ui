import React, { useState } from 'react'
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
  
  const activeFilters = [
    {
      type: "responsible",
      value: admin
    },
    {
      type: "service",
      value: "Jardinagem"
    }
  ]

const FilterBar = ({ availableFilters }) => {
  const [activFilters, setActivFilters] = useState([]);
  
  const handleQuery = (newQuery) => {
      console.log('newQuery', newQuery)
      // action to update query on reducer
    // setQuery(newQuery)
  }

  const handleFilters = (newFilters) => {
    console.log(newFilters)
    // action to update filters on reducer
    // setFilters(newFilters)
  }

  const handleRemoveFilter = (removeFilter) => {

      console.log(removeFilter)
  }
  
  console.log("avvvvvvv", availableFilters)

  return (
    <StyledFilterBar>
        <Header>
            <Selects>
                <Search style="service" onChange={handleQuery} />
                <Select options={availableFilters} onFilters={handleFilters} />
            </Selects>
            <IconSwitch switchType="layout"/>
        </Header>

        <Filters>
            {activeFilters && activeFilters.map(filter => {
                    return (
                        <FilterButton 
                            filterType={filter.type} 
                            filterValue={filter.value}
                            onClose={handleRemoveFilter}
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

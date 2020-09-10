import React, { useState } from 'react'
import PropTypes from 'prop-types';

import { useTranslate } from 'polyglot-react-redux-sdk';

import Icon from 'Components/Icon';
import { SmallBody, Link } from 'Components/Text';

import StyledFilterButton, { CloseContainer, FilterTitle } from './style';

const getIconName = (filterType) => {
    switch (filterType) {
        case "responsible": return "User"; break;
        case "date": return "calendar"; break;
        case "service": return "tool-1"; break;
        case "status": return "activity"; break;
        case "region": return "Language"; break;
        default: return "User";
    }
}

const FilterButton = ({ filterType, filterValue, options, onChange, onClose }) => {
//   const [checked, setChecked] = useState(leftChecked)
    const t = useTranslate("filters");

    

  const handleChange = () => {
    // onChange(!checked)
    // setChecked(!checked)
  }

  const handleClose = () => {
      // action to remove filter from filter list
  }

  return (
    <StyledFilterButton>
        <FilterTitle filterType={filterType}>
            <Icon name={getIconName(filterType)} />
            <span>{t(filterType)}:</span>
        </FilterTitle>
        <Link>
            {/* {filterValue ? 
                <>{filterValue}</>
            :
                <>Todos</>
            }  */}
            Todo
            <Icon name="chevron-down"/>
        </Link>

        <CloseContainer onClick={e => onClose(filterType)}>
            <Icon name="Close"/>
        </CloseContainer>
    </StyledFilterButton>

  )
}

FilterButton.propTypes = {
    filterType: PropTypes.oneOf(["responsible", "date", "service", "status", "region"]),
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
  

export default FilterButton


import React, { useState } from 'react';
import PropTypes from 'prop-types';

import t from '../utils/translation';

import { Body } from '../Text';
import Icon from '../Icon';
import { Container, Input, Button, SearchIconContainer } from './style';

const SearchInput = ({
  error,
  placeholder,
  defaultValue,
  label,
  translate,
  onChange,
  type = 'main'
}) => {
  const [val, setVal] = useState(defaultValue || '');

  const handleChange = e => {
    setVal(e.target.value);
    onChange(e.target.value);
  };

  // const filters = []
  // filters.push(newFilter)

  return (
    <Container>
      <Input
        placeholder={placeholder}
        type={type}
        value={val}
        defaultValue={defaultValue}
        onChange={handleChange}
      />
      {type === 'filter' && (
        <SearchIconContainer>
          <Icon name='Search' />
        </SearchIconContainer>
      )}

      {type === 'main' && (
        <Button>
          <Body>{t(translate, 'searchBtn')}</Body>
        </Button>
      )}
    </Container>
  );
};

SearchInput.propTypes = {
  error: PropTypes.string,
  placeholder: PropTypes.string,
  translate: PropTypes.func,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  type: PropTypes.oneOf(['noButton', 'main', 'secondary', 'filter']),
  onChange: PropTypes.func
};

export default SearchInput;

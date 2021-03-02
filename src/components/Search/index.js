import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslate } from 'polyglot-react-redux-sdk';

import { Body } from '../Text';
import Icon from '../Icon';
import { Container, Input, Button, SearchIconContainer } from './style';

const SearchInput = ({
  error,
  placeholder,
  defaultValue,
  label,
  onChange,
  type = 'main'
}) => {
  const t = useTranslate('buttons');

  const [val, setVal] = useState('');

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
        onChange={handleChange}
      />
      {type === 'filter' && (
        <SearchIconContainer>
          <Icon name='Search' />
        </SearchIconContainer>
      )}

      {type === 'main' && (
        <Button>
          <Body>{t('searchBtn')}</Body>
        </Button>
      )}
    </Container>
  );
};

SearchInput.propTypes = {
  error: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  type: PropTypes.oneOf(['noButton', 'main', 'secondary', 'filter']),
  onChange: PropTypes.func
};

export default SearchInput;

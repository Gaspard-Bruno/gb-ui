import React from "react";
import PropTypes from "prop-types";

import { SmallBody, Body } from "Components/Text";
import { Container, Input, Button } from "./style";

const SearchInput = ({ error, placeholder, defaultValue, label, onChange }) => (
  <Container>
    <Input></Input>
    <Button>
      <Body>Search</Body>
    </Button>
  </Container>
);

SearchInput.propTypes = {
  error: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func
};

export default SearchInput;

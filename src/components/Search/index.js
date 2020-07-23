import React from "react";
import PropTypes from "prop-types";

import { Body } from "Components/Text";
import { Container, Input, Button } from "./style";

const SearchInput = ({
  error,
  placeholder,
  defaultValue,
  label,
  onChange,
  style = "main"
}) => (
  <Container>
    <Input></Input>
    {style === "main" && (
      <Button>
        <Body>Search</Body>
      </Button>
    )}
  </Container>
);

SearchInput.propTypes = {
  error: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  style: PropTypes.oneOf(["noButton", "main", "secondary"]),
  onChange: PropTypes.func
};

export default SearchInput;

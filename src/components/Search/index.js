import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTranslate } from "polyglot-react-redux-sdk";

import { Body } from "Components/Text";
import Icon from "Components/Icon";
import { Container, Input, Button, SearchIconContainer } from "./style";

const SearchInput = ({
  error,
  placeholder,
  defaultValue,
  label,
  onChange,
  style = "main"
}) => {
  const t = useTranslate("buttons");

  const [val, setVal] = useState("");

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
        type={style}
        value={val}
        onChange={handleChange}
      />
      {style === "service" && (
        <SearchIconContainer>
          <Icon name="Search" />
        </SearchIconContainer>
      )}

      {style === "main" && (
        <Button>
          <Body>{t("searchBtn")}</Body>
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
  style: PropTypes.oneOf(["noButton", "main", "secondary", "service"]),
  onChange: PropTypes.func
};

export default SearchInput;

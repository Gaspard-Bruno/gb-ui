import React from "react";
import { DropDownContainer, ListContainer } from "./style";
import Button from "components/Button";
import PropTypes from "prop-types";

const DropDownMenu = ({ menuOptions }) => {
  return <DropDownContainer>{renderMenuList(menuOptions)}</DropDownContainer>;
};

const renderMenuList = menuOptions => {
  const list = menuOptions.map((item, index) => {
    const icon = item?.hasIcon?.name ?? false;
    return (
      <ListContainer key={`${item}-${index}`}>
        <Button
          btnType="transparent"
          text={item.label}
          action={item.action}
          icon={icon}
        />
      </ListContainer>
    );
  });
  return list;
};


DropDownMenu.propTypes = {
  menuOptions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      action: PropTypes.func,
      hasIcon: PropTypes.bool,
    })
  ),
};
export default DropDownMenu;

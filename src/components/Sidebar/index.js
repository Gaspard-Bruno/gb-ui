import React from "react";
import PropTypes from "prop-types";
import t from "Utils/translation";

import Logo from "Components/Logo";
import { Col } from "Components/Layout";
import StyledSidebar, {
  NavSection,
  NavLink,
  NavText,
  NavHeader,
  LogoContainer
} from "./style";

const Sidebar = ({ sidebarSections, translate }) => {
  // eslint-disable-next-line react/prop-types
  const SidebarLink = ({ route, text, disabled, disabledIcon }) => {
    return route && !disabled ? (
      <NavLink to={route} active={disabled}>
        {text}
      </NavLink>
    ) : (
      <NavText disabled={disabled}>
        {text} {disabledIcon || ""}
      </NavText>
    );
  };

  return (
    <StyledSidebar>
      <Col>
        <LogoContainer>
          <SidebarLink
            routePath={{ path: "/", exact: true }}
            to="/"
            isLogo={true}
          >
            <Logo color={"white"} />
          </SidebarLink>
        </LogoContainer>
        {Object.keys(sidebarSections).map(s => {
          const section = sidebarSections[s];
          return (
            <NavSection key={"section-" + section.title}>
              <NavHeader>{t(translate, section.title)}</NavHeader>
              {section.items.map(item => (
                <SidebarLink
                  key={"sidebar-" + item.label}
                  route={item.route}
                  text={t(translate, item.label)}
                  disabled={item.disabled}
                  disabledIcon="🚧"
                />
              ))}
            </NavSection>
          );
        })}
      </Col>
    </StyledSidebar>
  );
};

Sidebar.propTypes = {
  translate: PropTypes.func,
  sidebarSections: PropTypes.arrayOf({
    title: PropTypes.string,
    items: PropTypes.arrayOf({
      text: PropTypes.string,
      route: PropTypes.string,
      disabled: PropTypes.bool
    })
  })
};

Sidebar.defaultProps = {
  sidebarSections: []
};
export default Sidebar;

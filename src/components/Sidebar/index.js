import React from "react";
import { useRouteMatch } from "react-router-dom";

import { useTranslate } from "polyglot-react-redux-sdk";

import Logo from "Components/Logo";

import StyledSidebar, { NavSection, NavLink, NavHeader } from "./style";

const Sidebar = props => {
  const t = useTranslate("sidebar");

  // eslint-disable-next-line react/prop-types
  const SidebarLink = ({ routePath, to, text, children }) => {
    let match = useRouteMatch(routePath);

    return (
      <NavLink to={to} active={!!match}>
        {text ? <p>{text}</p> : children}
      </NavLink>
    );
  };

  return (
    <StyledSidebar>
      <SidebarLink routePath={{ path: "/", exact: true }} to="/">
        <Logo color={"white"} />
      </SidebarLink>

      <NavSection>
        <NavHeader>{t("services")}</NavHeader>
        <SidebarLink
          routePath="/dashboard/requests"
          to="/dashboard/requests"
          text={t("requests")}
        />
        <SidebarLink
          routePath="/dashboard/archive"
          to="/dashboard/archive"
          text={t("archive")}
        />
      </NavSection>

      <NavSection>
        <NavHeader>{t("specialists")}</NavHeader>
        <SidebarLink
          routePath="/dashboard/candidates"
          to="/dashboard/candidates"
          text={t("candidates")}
        />
        <SidebarLink
          routePath="/dashboard/specialists"
          to="/dashboard/specialists"
          text={t("specialists")}
        />
      </NavSection>

      <NavSection>
        <NavHeader>{t("clients")}</NavHeader>
        <SidebarLink
          routePath="/dashboard/clients"
          to="/clients"
          text={t("clients")}
        />
      </NavSection>

      <NavSection>
        <NavHeader>{t("team")}</NavHeader>
        <SidebarLink routePath="/members" to="/members" text={t("members")} />
      </NavSection>
    </StyledSidebar>
  );
};

export default Sidebar;

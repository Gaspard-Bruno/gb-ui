import React from "react";
import { useRouteMatch } from "react-router-dom";

import { useTranslate } from "polyglot-react-redux-sdk";

import { Link } from "Components/Text";
import Logo from "Components/Logo";

import StyledSidebar, { NavSection, NavLink } from "./style";

const SidebarLink = ({ routePath, to, text, children }) => {
    let match = useRouteMatch(routePath);

    return (
        <Link to={to}>
            <NavLink active={!!match}>
                { text ?
                    <p>{text}</p>
                    :
                    children
                }
            </NavLink>
        </Link>
    )
}

const Sidebar = props => {
    const t = useTranslate("sidebar");

    return (
        <StyledSidebar>
            <SidebarLink routePath={{path: '/', exact: true}} to="/">
                <Logo />
            </SidebarLink>

            <NavSection>
                <h5>{t('services')}</h5>
                <SidebarLink routePath="/requests" to="/requests" text={t('requests')} />
                <SidebarLink routePath="/archive" to="/archive" text={t('archive')} />
            </NavSection>

            <NavSection>
                <h5>{t('specialists')}</h5>
                <SidebarLink routePath="/candidates" to="/candidates" text={t('candidates')} />
                <SidebarLink routePath="/specialists" to="/specialists" text={t('specialists')} />                              
            </NavSection>

            <NavSection>
                <h5>{t('clients')}</h5>
                <SidebarLink routePath="/clients" to="/clients" text={t('clients')} />  
            </NavSection>

            <NavSection>
                <h5>{t('team')}</h5>
                <SidebarLink routePath="/members" to="/members" text={t('members')} />
        
            </NavSection>            

        </StyledSidebar>
    )
}

export default Sidebar;
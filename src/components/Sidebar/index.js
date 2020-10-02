import React, { useState } from 'react';
import PropTypes from 'prop-types';
import t from '../utils/translation';

import { SubHeading } from '../Text';
import Button from '../Button';
import { Col, Row } from '../Layout';
import StyledSidebar, {
  NavSection,
  NavLink,
  NavText,
  NavHeader,
} from './style';

const Sidebar = ({ sidebarSections, translate, isOpenable }) => {
  const [isOpen, setIsOpen] = useState(true);

  // eslint-disable-next-line react/prop-types
  const SidebarLink = ({ route, text, disabled, disabledIcon }) => {
    return route && !disabled ? (
      <NavLink to={route} active={disabled}>
        {text}
      </NavLink>
    ) : (
      <NavText disabled={disabled}>
        {text} {disabledIcon || ''}
      </NavText>
    );
  };

  return (
    <StyledSidebar open={isOpen}>
      <Col>
        <NavSection open={isOpen}>
          <Row align='center'>
            <Col>
              <SubHeading color='lightestBeige'>55+ UI Kit</SubHeading>
              <NavHeader>by Gaspard+Bruno</NavHeader>
            </Col>
            {isOpenable && (
              <Button
                open={isOpen}
                icon='arrow-left'
                action={() => setIsOpen(!isOpen)}
                btnType={'terceary'}
              />
            )}
          </Row>
        </NavSection>
        <SidebarLink route={'/'} text='Home'></SidebarLink>
        {Object.keys(sidebarSections).map((s) => {
          const section = sidebarSections[s];
          return (
            <NavSection key={'section-' + section.title}>
              <NavHeader>{t(translate, section.title)}</NavHeader>
              {section.items.map((item) => (
                <SidebarLink
                  key={'sidebar-' + item.label}
                  route={item.route}
                  text={t(translate, item.label)}
                  disabled={item.disabled}
                  disabledIcon='🚧'
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
  isOpenable: PropTypes.bool,
  translate: PropTypes.func,
  sidebarSections: PropTypes.arrayOf({
    title: PropTypes.string,
    items: PropTypes.arrayOf({
      text: PropTypes.string,
      route: PropTypes.string,
      disabled: PropTypes.bool,
    }),
  }),
};

Sidebar.defaultProps = {
  sidebarSections: [],
};
export default Sidebar;

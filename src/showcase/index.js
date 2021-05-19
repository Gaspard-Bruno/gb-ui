import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';

import components from 'showcase/components';

import THEMES, { GlobalStyles } from 'Theme';
import useTheme from 'Hooks/useTheme';
import { Row, Sidebar, Col, SubHeading } from 'Components';
import { NavHeader } from 'Components/Sidebar/style';

import ComponentPage from './componentPage';

const SECTIONS = {};

const buildPathFromLabel = label => `/${label.toLowerCase()}`;
components.forEach(component => {
  const componentSection = component.section || 'Other';
  if (!SECTIONS[componentSection]) {
    SECTIONS[componentSection] = {
      title: componentSection,
      items: []
    };
  }
  SECTIONS[componentSection].items.push({
    ...component,
    route: buildPathFromLabel(component.label)
  });
});

const ShowCase = () => {
  const { Provider, toggleTheme } = useTheme(THEMES);
  return (
    <Provider>
      <GlobalStyles />
      <BrowserRouter>
        <Row
          noWrap
          inlineStyle={() => `overflow: hidden; max-height: 100vh;`}
          bg='background'
        >
          <Sidebar
            sidebarSections={SECTIONS}
            isOpenable
            sidebarHeading={() => (
              <Col>
                <SubHeading color='white'>GB UI</SubHeading>
                <NavHeader>by Gaspard+Bruno</NavHeader>
              </Col>
            )}
          />
          <ComponentPage toggleTheme={toggleTheme} />
        </Row>
      </BrowserRouter>
    </Provider>
  );
};

export default ShowCase;

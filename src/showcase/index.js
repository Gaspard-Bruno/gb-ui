import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';

import components from 'showcase/components';

import { GlobalStyles, theme55 } from 'Theme';
import useTheme from 'Hooks/useTheme';

import { Row, Sidebar } from 'Components';

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
  const { Provider, toggleTheme } = useTheme(theme55);
  return (
    <Provider>
      <GlobalStyles />
      <BrowserRouter>
        <Row noWrap inlineStyle={`overflow: hidden; max-height: 100vh;`} bg="bg">
          <Sidebar sidebarSections={SECTIONS} isOpenable />
          <ComponentPage toggleTheme={toggleTheme} />
        </Row>
      </BrowserRouter>
    </Provider>
  );
};

export default ShowCase;

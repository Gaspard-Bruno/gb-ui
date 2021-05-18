import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import components from 'Config/components';

import THEME, { GlobalStyles } from 'Theme';

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

const Router = () => {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyles />
      <BrowserRouter>
        <Row noWrap inlineStyle={`overflow: hidden; max-height: 100vh;`}>
          <Sidebar sidebarSections={SECTIONS} isOpenable />
          <ComponentPage />
        </Row>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Router;

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import THEMES from '../theme';

const DARK_THEME = 'DARK';
const LIGHT_THEME = 'LIGHT';
const LOCAL_STORAGE_THEME_KEY = 'THEME';

const getOSTheme = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches
    ? DARK_THEME
    : LIGHT_THEME;

const useTheme = theme => {
  // const ThemeContext = createContext(getOSTheme());
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || getOSTheme()
  );
  const handleChangeTheme = newTheme => {
    if (THEMES[newTheme]) {
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
      setCurrentTheme(newTheme);
    }
  };
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, getOSTheme());
  }, []);

  const Provider = ({ children }) => {
    return (
      <ThemeProvider
        theme={{
          ...THEMES[currentTheme],
          ...theme,
          colors: {
            ...THEMES[currentTheme].colors,
            ...theme.colors
          }
        }}
      >
        {children}
      </ThemeProvider>
    );
  };

  return {
    Provider,
    handleChangeTheme
  };
};

export default useTheme;

import React, { useState, useEffect, useCallback, createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import THEMES, { theme55 } from '../theme';

const DARK_THEME = 'DARK';
const LIGHT_THEME = 'LIGHT';
const LOCAL_STORAGE_THEME_KEY = 'THEME';

const getOSTheme = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches
    ? DARK_THEME
    : LIGHT_THEME;

const ThemeContext = createContext(getOSTheme());
const useTheme = (theme = theme55) => {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || getOSTheme()
  );
  const handleChangeTheme = newTheme => {
    if (THEMES[newTheme]) {
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
      setCurrentTheme(newTheme);
    }
  };
  const toggleTheme = () => {
    const newTheme = currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    setCurrentTheme(newTheme);
  };
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, getOSTheme());
  }, []);

  const Provider = useCallback(
    ({ children }) => {
      return (
        <ThemeContext.Provider value={{ currentTheme }}>
          <ThemeContext.Consumer>
            {ctx =>
              ctx && (
                <ThemeProvider
                  theme={{
                    ...theme,
                    ...THEMES[ctx.currentTheme],
                    colors: {
                      ...theme.colors,
                      ...THEMES[ctx.currentTheme].colors
                    }
                  }}
                >
                  {children}
                </ThemeProvider>
              )
            }
          </ThemeContext.Consumer>
        </ThemeContext.Provider>
      );
    },
    [currentTheme]
  );

  return {
    Provider,
    toggleTheme,
    handleChangeTheme
  };
};

export default useTheme;

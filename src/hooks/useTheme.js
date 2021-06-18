import React, { useState, useEffect, useCallback, createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { uiTheme } from '../theme';

const DARK_THEME = 'DARK';
const LIGHT_THEME = 'LIGHT';
const LOCAL_STORAGE_THEME_KEY = 'THEME';

const getOSTheme = () => {
  return LIGHT_THEME
};

const ThemeContext = createContext(getOSTheme());
const useTheme = THEMES => {
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
    if (!localStorage.getItem(LOCAL_STORAGE_THEME_KEY)) {
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, getOSTheme());
    }
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
                    ...uiTheme,
                    ...THEMES[ctx.currentTheme],
                    colors: {
                      ...uiTheme?.colors,
                      ...THEMES[ctx.currentTheme].colors,
                      feedback: {
                        ...uiTheme?.colors?.feedback,
                        ...THEMES[ctx.currentTheme]?.colors?.feedback
                      },
                      brand: {
                        ...uiTheme?.colors?.brand,
                        ...THEMES[ctx.currentTheme]?.colors?.brand
                      },
                      muted: {
                        ...uiTheme?.colors?.muted,
                        ...THEMES[ctx.currentTheme]?.colors?.muted
                      }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentTheme]
  );

  return {
    Provider,
    toggleTheme,
    handleChangeTheme
  };
};

export default useTheme;

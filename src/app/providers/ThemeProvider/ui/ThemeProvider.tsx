import React, { FC, useMemo } from 'react';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material';
// import { LOCAL_STORAGE_THEME_KEY, Theme } from '../lib/ThemeContext';

import componentsOverride from '../lib/overrides';
import {
  customShadows,
  palette,
  shadows,
  typography,
} from '../lib';

// const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider: FC = ({ children }) => {
  const themeOptions = useMemo(
    () => ({
      palette,
      typography,
      shadows: shadows(),
      customShadows: customShadows(),
      shape: { borderRadius: 6 },
    }),
    [],
  );

  const theme = createTheme(themeOptions as any);
  theme.components = componentsOverride(theme);

  return (
    <MUIThemeProvider theme={theme}>
      {children}
    </MUIThemeProvider>
  );
};

export default ThemeProvider;

import { useState } from 'react';

const useTheme = () => {
  // Detecting the default theme
  const isBrowserDefaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [isDarkMode, setMode] = useState(isBrowserDefaultDark);

  const setTheme = () => {
    setMode(!isDarkMode);
  };

  let theme;
  isDarkMode ? (theme = 'dark') : (theme = 'light');

  return [theme, setTheme];
};

export { useTheme };

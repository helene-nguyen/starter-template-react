import { useState } from 'react';

const useTheme = () => {
  // Detecting the default theme
  const isBrowserDefaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Detecting mobile or not
  // console.log(window.navigator.userAgentData.mobile)

  const [isDarkMode, setMode] = useState(isBrowserDefaultDark);

  const handleThemeChange = () => {
    setMode(!isDarkMode);
  };

  let theme;
  isDarkMode ? (theme = 'dark') : (theme = 'light');

  return [theme, handleThemeChange];
};

export { useTheme };

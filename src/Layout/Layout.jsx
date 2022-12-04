//& Import Module
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from '../Hooks/useTheme';

//& Imports Components
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { Spinner } from '../Components';

//& Import SCSS
import './Layout.scss';

const Layout = () => {

  const [theme, handleThemeChange] = useTheme();
  // -------------- Dark Mode
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const handleDarkModeChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  const changeMode = () => {
    return isDarkMode ? 'dark' : 'light';
  };
  // --------------
 
  return (
    <div className={`layout theme--${theme}`}>
      <Header  onDarkModeToggle={handleThemeChange} theme={theme} />
      <main>
        <Spinner />
        <Outlet />
      </main>
      <Footer changeMode={handleThemeChange}/>
    </div>
  );
};

export default Layout;


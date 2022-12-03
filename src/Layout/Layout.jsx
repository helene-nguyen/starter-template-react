//& Import Module
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

//& Imports Components
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { Spinner } from '../Components';

//& Import SCSS
import './Layout.scss';

const Layout = () => {

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
    <div className={`layout theme--${changeMode()}`}>
      <Header  onDarkModeToggle={handleDarkModeChange} changeMode={changeMode} />
      <main>
        <Spinner />
        <Outlet />
      </main>
      <Footer changeMode={changeMode}/>
    </div>
  );
};

export default Layout;


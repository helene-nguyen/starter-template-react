//& Import Module
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useTheme } from '../Hooks/useTheme';

//& Imports Components
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { Spinner } from '../Components';
import { Cursor } from '../Components';

//& Import SCSS
import './Layout.scss';

const Layout = ({ pages }) => {
  // -------------- Change theme
  const [theme, setTheme] = useTheme();

  // Detecting mobile or not
  // console.log(window.navigator.userAgentData.mobile) -> boolean

  return (
    <div className={`layout theme--${theme}`}>
      <Header handleToggleMode={setTheme} theme={theme} />
      <main>
        {/* <Spinner /> */}
        <Cursor />
        <Outlet />
      </main>
      <Footer theme={theme} />
    </div>
  );
};

export default Layout;

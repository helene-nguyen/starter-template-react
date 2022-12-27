//& Import Module
import { Outlet, useLocation } from 'react-router-dom';
import { useTheme } from '../Hooks/useTheme';
import { useCursor } from '../Hooks/useCursor';

//& Imports Components
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { Cursor, Title } from '../Components';

//& Import SCSS
import './Layout.scss';

const Layout = ({ pages }) => {
      // Detecting mobile or not
  const isMobile = window.navigator.userAgentData.mobile;
  
  // -------------- Change theme
  const [theme, setTheme] = useTheme();
  
  // -------------- Handle cursor
  const action = {
    display: 'none',
  };
  const [cursorOptions, setCursorOptions] = useCursor('default', 'action', action);
  
  // -------------- Handle title
  let title;
  const location = useLocation().pathname;

  const getTitle = pages.find((elem) => {
    return elem.name.toLowerCase() === location.slice(1).toLowerCase();
  });
  getTitle !== undefined && (title = getTitle.name);

  return (
    <div className={`layout theme--${theme}`}>
      <Header handleToggleMode={setTheme} theme={theme} {...setCursorOptions} />
      <Title title={title} />
      <main>
        {!isMobile && <Cursor {...cursorOptions} />}
        <Outlet />
      </main>
      <Footer theme={theme} />
    </div>
  );
};

export default Layout;

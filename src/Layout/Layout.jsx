//& Import Module
import { Outlet } from 'react-router-dom';
import { useTheme } from '../Hooks/useTheme';
import { useCursor } from '../Hooks/useCursor';

//& Imports Components
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { Cursor } from '../Components';

//& Import SCSS
import './Layout.scss';

const Layout = ({ pages }) => {
  // -------------- Change theme
  const [theme, setTheme] = useTheme();

  const action = {
    display: 'none',
  };

  const [cursorOptions, setCursorOptions] = useCursor('default', 'action', action);

  return (
    <div className={`layout theme--${theme}`}>
      <Header handleToggleMode={setTheme} theme={theme} {...setCursorOptions} />
      <main>
        <Cursor {...cursorOptions} />
        <Outlet />
      </main>
      <Footer theme={theme} />
    </div>
  );
};

export default Layout;

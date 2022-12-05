//& Import Module
import { Outlet } from 'react-router-dom';
import { useTheme } from '../Hooks/useTheme';

//& Imports Components
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { Spinner } from '../Components';

//& Import SCSS
import './Layout.scss';

const Layout = ({ pages }) => {
  // -------------- Dark Mode
  const [theme, setTheme] = useTheme();

  // Detecting mobile or not
  // console.log(window.navigator.userAgentData.mobile)

  return (
    <div className={`layout theme--${theme}`}>
      <Header handleToggleMode={setTheme} theme={theme} />
      <main>
        <Spinner />
        <Outlet />
      </main>
      <Footer theme={theme} />
    </div>
  );
};

export default Layout;

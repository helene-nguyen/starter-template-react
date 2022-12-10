//& Import modules

//& Imports SCSS
import './Header.scss';

//& Import Component
import { Logo, Navbar, ThemeBtn } from '../../Components';

const Header = ({ handleToggleMode, theme, ...options }) => {
 
  return (
    <header className={`header theme--${theme}`}>
      <Logo />
      <Navbar {...options} />
      <ThemeBtn handleToggleMode={handleToggleMode}  {...options} />
    </header>
  );
};

export default Header;

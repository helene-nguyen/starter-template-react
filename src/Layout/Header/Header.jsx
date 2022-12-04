//& Import modules

//& Imports SCSS
import './Header.scss';

//& Import Component
import { Logo, Navbar, ThemeBtn } from '../../Components';

const Header = ({ handleToggleMode, theme, pages }) => {
  return (
    <header className={`header theme--${theme}`}>
      <Logo />
      <Navbar />
      <ThemeBtn handleToggleMode={handleToggleMode} />
    </header>
  );
};

export default Header;

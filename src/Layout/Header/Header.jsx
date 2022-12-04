//& Imports SCSS
import './Header.scss';

//& Import Component
import {Logo, Navbar, ThemeBtn} from '../../Components';

const Header = ({onDarkModeToggle, theme}) => {
  return (
    <header className={`header theme--${theme}`}>
      <Logo />
      <Navbar />
      <ThemeBtn onDarkModeToggle={onDarkModeToggle}/> 
    </header>
  );
}

export default Header;


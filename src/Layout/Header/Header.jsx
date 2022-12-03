//& Imports SCSS
import './Header.scss';

//& Import Component
import {Logo, Navbar, ThemeBtn} from '../../Components';

const Header = ({onDarkModeToggle, changeMode}) => {
  return (
    <header className={`header theme--${changeMode()}`}>
      <Logo />
      <Navbar />
      <ThemeBtn onDarkModeToggle={onDarkModeToggle}/> 
    </header>
  );
}

export default Header;


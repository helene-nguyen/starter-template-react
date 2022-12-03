//& Import Scss
import './Navbar.scss';

//& Imports Modules
import { NavLink } from 'react-router-dom';

//& Import Routes
import { NavbarLink } from '../../Routes/Routes'

const Navbar = () => {
  return (
    <nav>
      <ul>
        {NavbarLink.map(({id, name, mainPath}) => (
          <li key={id}>
            <NavLink className={({ isActive }) => isActive ? 'menu--active' : 'menu'} to={mainPath} >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;


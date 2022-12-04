//& Import Scss
import './Navbar.scss';

//& Imports Modules
import { NavLink } from 'react-router-dom';

//& Import Routes
import { Router } from '../../Routes/Routes';

const Navbar = () => {
  return (
    <nav>
      <ul>
        {Router.map(
          ({ id, name, mainPath }) =>
            name !== 'NoPage' && (
              <li key={id}>
                <NavLink className={({ isActive }) => (isActive ? 'menu--active' : 'menu')} to={mainPath}>
                  {name}
                </NavLink>
              </li>
            )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

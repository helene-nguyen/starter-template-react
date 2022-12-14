//& Import Scss
import './Navbar.scss';

//& Imports Modules
import { NavLink } from 'react-router-dom';

//& Import Routes
import { Router } from '../../Routes/Routes';

const Navbar = ({ ...options }) => {
  
  const { onMouseEnter, onMouseLeave } = options;
  
  const mouseEnter = (event) => {
    onMouseEnter();
    event.currentTarget.classList.add('navbar__box');
  };
  const mouseLeave = (event) => {
    onMouseLeave();
    event.currentTarget.classList.remove('navbar__box');
  };

  return (
    <nav className="navbar">
      <ul>
        {Router.map(
          ({ id, isNav, name, mainPath }) =>
          isNav && (
              <li onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} key={id}>
                <NavLink className={({ isActive }) => (isActive ? 'navbar__item--active' : 'navbar__item')} to={mainPath}>
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

//& Import Scss
import './Navbar.scss';

//& Imports Modules
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

//& Import Routes
import { Router } from '../../Routes/Routes';

const Navbar = () => {
  const [foo, setFoo] = useState('default');

  const mouseEnter = (event) => {
    setFoo('box')
  };
  const mouseLeave = (event) => {
    setFoo('default')
    console.log(event.target);
  };

  return (
    <nav className="navbar">
      <ul>
        {Router.map(
          ({ id, isNav, name, mainPath }) =>
          isNav && (
              <li className={`navbar__${foo}`} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} key={id}>
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

import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../Style/header.scss';
import UserContext from './UserContext';

function Header(props) {
  console.log(props, 'Header props');
  const user = useContext(UserContext);
  console.log(user, 'bhosadika');

  return (
    <div className="container">
      <header className="flex justify-between align-item header">
        <ul>
          <li className="conduit" key={'conduit'}>
            <NavLink to="/">conduit</NavLink>
          </li>
        </ul>
        <ul className="flex justify-between align-item nav">
          <li key={'home'}>
            <NavLink activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li key={'login'}>
            <NavLink activeClassName="active" to="/login">
              Login
            </NavLink>
          </li>
          <li key={'signup'}>
            <NavLink activeClassName="active" to="/signup">
              Sign-up
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;

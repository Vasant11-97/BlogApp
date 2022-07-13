import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/header.scss';

function Header() {
  return (
    <div className="container">
      <header className="flex justify-between align-item header">
        <ul>
          <li className="conduit">
            <Link to="/">conduit</Link>
          </li>
        </ul>
        <ul className="flex justify-between align-item nav">
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign-up</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;

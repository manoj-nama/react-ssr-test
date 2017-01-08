import React, { Component } from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h3>Awesome React App</h3>
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to={'/'} >Home</Link>
          </li>
          <li>
            <Link to={'/about'} >About</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from './logo_text.png';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <ul className="navbar-menu">
        <li className={location.pathname === '/allwebsites' ? 'active' : ''}>
          <a href="/allwebsites">모든 홈페이지</a>
        </li>
        <li className={location.pathname === '/facilities' ? 'active' : ''}>
          <a href="/facilities">편의시설</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
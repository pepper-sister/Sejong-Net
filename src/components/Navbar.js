import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/logo_text.png';
import '../styles/Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav class="navbar">
      <div class="navbar-logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <ul class="navbar-menu">
        <li class={location.pathname === '/allwebsites' ? 'active' : ''}>
          <a href="/allwebsites">모든 홈페이지</a>
        </li>
        <li class={location.pathname === '/facilities' ? 'active' : ''}>
          <a href="/facilities">편의시설</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
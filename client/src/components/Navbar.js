// src/components/Navbar.js
import React from 'react';
import LogoutButton from './LogoutButton';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="/assets/logo.png" alt="Covette Logo" className="navbar-logo" />
      <div className="navbar-right">
        <span className="contact-link">Contact</span>
        <LogoutButton />
      </div>
    </nav>
  );
};

export default Navbar;


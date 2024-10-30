import React from 'react';
import './header.css';
import Logotype from './logotype';
import { NavLink } from 'react-router-dom'; // Import NavLink

function nav() {
  return (
    <>
    <header>
      <div id="nav">
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-logo active' : 'nav-logo'}> 
          <Logotype />
        </NavLink>
        <div id='links'>
          <NavLink to="/solutions" className={({ isActive }) => isActive ? 'active' : undefined}>Solutions</NavLink>
          <NavLink to="/pricing" className={({ isActive }) => isActive ? 'active' : undefined}>Pricing</NavLink>
          <NavLink to="/enterprise" className={({ isActive }) => isActive ? 'active' : undefined}>Enterprise</NavLink>
        </div>
      </div>
    </header>
    </>
  );
}

export default nav;
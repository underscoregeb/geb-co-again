import React from 'react';
import './header.css';
import Logotype from './logotype';
import { Link, NavLink } from 'react-router-dom'; // Import NavLink

function nav() {
  return (
    <>
    <header>
      <div id="nav">
        <Link to="/"> {/* Use Link for the home page */}
          <Logotype />
        </Link>
        <div id='links'>
          <NavLink to="/alpha" className={({ isActive }) => isActive ? 'active' : undefined}>alpha</NavLink>
          <NavLink to="/beta" className={({ isActive }) => isActive ? 'active' : undefined}>beta</NavLink>
          <NavLink to="/gamma" className={({ isActive }) => isActive ? 'active' : undefined}>gamma</NavLink>
        </div>
      </div>
    </header>
    </>
  );
}

export default nav;
import React from 'react';
import './header.css';
import Logotype from './logotype';
import { Link } from 'react-router-dom'; // Import Link

function nav() {
  return (
    <>
      <div id="nav">
        <Link to="/"> {/* Use Link for the home page */}
          <Logotype />
        </Link>
        <div id='links'>
          <Link to="/alpha">alpha</Link> {/* Use Link for other pages */}
          <Link to="/beta">beta</Link>
          <Link to="/gamma">gamma</Link>
        </div>
      </div>
    </>
  );
}

export default nav;
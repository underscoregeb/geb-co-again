import React from 'react';
import './footer.css';
import Logo from '../logo/logo';
import { Link } from 'react-router-dom'; // Import Link

function bottomNav() {
  return (
    <>
    <footer>
      <div id="bottomnav">
        <Link id="bottomlogo" to="/"> {/* Use Link for the home page */}
          <Logo />
        </Link>
      </div>
    </footer>
    </>
  );
}

export default bottomNav;
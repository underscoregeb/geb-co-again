import React from 'react';
import './footer.css';
import Logo from '../logo/logo';
import Quarter from '../logo/quarter';
import { Link } from 'react-router-dom'; // Import Link

function bottomNav() {
  return (
    <>
    <footer>
      <div id="bottomnav">
        <Link id='copyright' to="/"> {/* Use Link for the home page */}
          <Quarter className="icon-quarter"/>
          <p>The Geb Company</p>
        </Link>
      </div>
    </footer>
    </>
  );
}

export default bottomNav;
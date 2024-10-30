import React, { useEffect } from 'react';
import Logo from '../logo/logo';
import './logotype.css';

function Logotype({ refresh }) { 
  return (
    <div className="logotype-container">
      <div className="logotype-icon">
        <Logo key={refresh} /> {/* Use refresh as key to force re-render */}
      </div>  
      <p className="logotype-text">The Geb Company</p>
    </div>
  );
}

export default Logotype;

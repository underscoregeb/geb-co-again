import React from 'react';
import Logo from '../logo/logo';
import './logotype.css';

function Logotype() {
  return (
    <div className="logotype-container">
      <Logo />
      <p className="logotype-text">The Geb Company</p>
    </div>
  );
}

export default Logotype;
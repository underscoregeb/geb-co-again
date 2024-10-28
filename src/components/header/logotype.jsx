import React from 'react';
import Logo from '../logo/logo';
import './logotype.css';
import { useLocation } from "react-router-dom";

function Logotype() {
  const location = useLocation();
  return (
    <div className="logotype-container">
      <Logo pathname={location.pathname} />
      <p className="logotype-text">The Geb Company</p>
    </div>
  );
}

export default Logotype;
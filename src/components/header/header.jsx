import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './header.css';
import Logotype from './logotype';

function nav() {
  const navigate = useNavigate();
  const [clickCount, setClickCount] = useState(0);
  const [refreshLogo, setRefreshLogo] = useState(false); // New state variable

  const handleMultiClick = () => {
    setClickCount(prevCount => prevCount + 1);
    setRefreshLogo(prev => !prev); // Toggle refreshLogo on click
  };
  const handleRefreshLogo = () => {
    setClickCount(prevCount => prevCount + 1);
    setRefreshLogo(prev => !prev); // Toggle refreshLogo on click
  };

  useEffect(() => {
    let timer;
    if (clickCount === 4) {
      navigate('/profile');
      setClickCount(0);
    } else if (clickCount > 0) {
      timer = setTimeout(() => {
        setClickCount(0);
      }, 400);
    }

    return () => clearTimeout(timer);
  }, [clickCount, navigate]);


  return (
    <div id="nav-container">
      <div id="nav">
        <NavLink to="/" onClick={handleRefreshLogo} className={({ isActive }) => isActive ? 'nav-logo active' : 'nav-logo'}>
          <Logotype refresh={refreshLogo} />
        </NavLink>
        <div id='links'>
          <NavLink to="/solutions" onClick={handleRefreshLogo} className={({ isActive }) => isActive ? 'active' : undefined}>Solutions</NavLink>
          <NavLink to="/pricing" onClick={handleRefreshLogo} className={({ isActive }) => isActive ? 'active' : undefined}>Pricing</NavLink>
          <NavLink to="/enterprise" onClick={handleRefreshLogo} className={({ isActive }) => isActive ? 'active' : undefined}>Enterprise</NavLink>
        </div>
      </div>
    </div>
  );
}

export default nav;
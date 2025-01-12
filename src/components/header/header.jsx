import { useEffect, useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import './header.css';
import Logotype from './logotype';
import Logo from '../logo/logo';

function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [clickCount, setClickCount] = useState(0);
  const [refreshLogo, setRefreshLogo] = useState(false); // New state variable

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

  const searchParams = new URLSearchParams(location.search);
  const isSpinny = searchParams.get('spinny') === 'true';

  return (
    <div id="nav-container">
      <div id="nav">
        <NavLink to="/" onClick={handleRefreshLogo} className={({ isActive }) => isActive ? 'nav-logo active' : 'nav-logo'}>
          <Logotype refresh={refreshLogo} spinny={isSpinny ? true : undefined} />
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

export default Nav;
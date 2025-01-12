import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './Home.jsx';
import Profile from './pages/Profile.jsx';
import Products from './pages/Solutions.jsx';
import Pricing from './pages/Pricing.jsx';
import Enterprise from './pages/Enterprise.jsx';
import Admin from './pages/Admin.jsx';
import Services from './pages/Services.jsx';

import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const FULLSCREEN_PAGES = ['/profile', '/admin'];

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    const isFullscreenPage = FULLSCREEN_PAGES.includes(location.pathname);
    document.body.classList.toggle('fullscreen-mode', isFullscreenPage);
  }, [location]);

  return (
    <div className="layout">
      <header>
        <Header />
      </header>

      <main>
        <AppRoutes />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/solutions" element={<Products />} />
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/enterprise" element={<Enterprise />} />
    <Route path="/admin" element={<Admin />} />
    <Route path="/services" element={<Services />} />
    {/* Catch-all route - redirects all undefined paths to home */}
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

const App = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

Layout.propTypes = {
  location: PropTypes.object,
};

export default App;
import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'

import Home from './Home.jsx';

import Alpha from './pages/Alpha.jsx';
import Beta from './pages/Beta.jsx';
import Gamma from './pages/Gamma.jsx';
import Products from './pages/Solutions.jsx';
import Pricing from './pages/Pricing.jsx';
import Enterprise from './pages/Enterprise.jsx';


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="layout">
      <header>
        <Header />
      </header>
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alpha" element={<Alpha />} />
          <Route path="/beta" element={<Beta />} />
          <Route path="/gamma" element={<Gamma />} />
          
          <Route path="/solutions" element={<Products />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/enterprise" element={<Enterprise />} />
        </Routes>
      </main>
      
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default App;

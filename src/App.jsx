import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'

import Home from './Home.jsx';
import Alpha from './Alpha.jsx';
import Beta from './Beta.jsx';
import Gamma from './Gamma.jsx';

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

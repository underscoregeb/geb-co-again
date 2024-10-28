import { useState } from 'react'
import './App.css'
import Header from './components/header.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home.jsx';
import Alpha from './Alpha.jsx';
import Beta from './Beta.jsx';
import Gamma from './Gamma.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/alpha' element={<Alpha />} />
        <Route path='/beta' element={<Beta />} />
        <Route path='/gamma' element={<Gamma />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App

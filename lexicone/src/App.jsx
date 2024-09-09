import React, { useState } from 'react';
import { Nav } from './components/navigation/Navigation'
import { Header } from './components/header/Header'
import { Search } from './components/searchBox/SearchBox'
import {SearchResults} from './searchResault/SearchResault';
import { Footer } from './components/footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home} from './pages/Home';
import { About } from './pages/About';





function App() {
 
  return (
    <>
     
      <Router>
        <Nav>        
        </Nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages/About" element={<About />} />
          </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App

import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
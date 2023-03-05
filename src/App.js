import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home'
import ContactMe from './Components/Pages/ContactMe'
import Projects from './Components/Pages/Projects'
import Header from './Components/Header'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contactme" element={<ContactMe />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </Router>
  )
}

export default App;

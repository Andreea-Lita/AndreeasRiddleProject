import { useState } from 'react'
// import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
// import ProjectGallery from './components/ProjectGallery';
import CV from './components/CV';
import Contact from './components/Contact';
import Projects from './components/ProjectsGallery';
import Skills from './components/Skills/Skills'
import Navbar from './components/navbar';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    {/* <div>
    <Navbar />
    </div> */}
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path="/" element={<About/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/cV" element={<CV/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/skills" element={<Skills/>} />
            </Routes> 
        </Wrapper>
        <Footer />
      </div>
    </Router>
    </>
  );
}

export default App

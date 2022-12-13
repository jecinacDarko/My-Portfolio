import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Projects from './routes/Projects';
import Resume from './routes/Resume'; 
import Contact from './routes/Contact';
import Skills from './routes/SkillRoute';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='/about' element={<About />} /> 
          <Route path='/projects' element={<Projects />} />
          <Route path='/techstack' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;

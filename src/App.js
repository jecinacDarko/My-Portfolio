import React from 'react';
import './App.css';
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Resume from './routes/Resume';
import Projects from './routes/Projects';

import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import About from "../routes/About";
import Projects from "../routes/Projects";
import Resume from "../routes/Resume"; 
import Contact from "../routes/Contact";

function AnimatedRoutes() {

  return (
    <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
    </Routes>    
  );
}

export default AnimatedRoutes;
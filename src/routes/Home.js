import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomePage from '../components/Homepage';
import Projects from '../components/Projects';
import AboutContent from '../components/AboutContent';
import Contacts from '../components/Form';
import Skills from '../components/Skills'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <AboutContent />
      <Projects />
      <Skills /> 
      <Contacts />
      <Footer />
    </div>
  );
};

export default Home;
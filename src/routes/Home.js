import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomePage from '../components/Homepage';
import Projects from '../components/Projects';
import AboutContent from '../components/AboutContent';
import Contacts from '../components/Form';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <AboutContent />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Home;
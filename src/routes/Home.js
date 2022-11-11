import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeImage from '../components/HomeImage';
import Projects from '../components/Projects';
import AboutContent from '../components/AboutContent';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className='scrollercoaster'>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        >
      <HomeImage />
      <AboutContent />
      <Projects />
      </motion.div>
      <Footer />
    </div>
  );
};

export default Home;
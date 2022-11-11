import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutContent from '../components/AboutContent';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        >
        <AboutContent />
      </motion.div>
      <Footer />
    </div>
   
  );
};

export default About;
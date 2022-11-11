import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cv from '../components/Cv';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        >
      <Cv />
      </motion.div>
      <Footer />
    </div>
  );
};

export default Resume;
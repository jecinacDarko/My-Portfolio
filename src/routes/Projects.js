import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import { motion } from "framer-motion";

const Work = () => {
    return (
      <div>
        <Navbar />
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        >
        <Projects />
        </motion.div>
        <Footer />
      </div>
    );
  };
  
  export default Work;
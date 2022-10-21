import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BannerImage from "../components/BannerImage";
import Cv from "../components/Cv";
import { motion } from "framer-motion";

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
      <BannerImage heading="RESUME." text="Download to be implemented." />
      <Cv />
      </motion.div>
      <Footer />
    </div>
  );
};

export default Resume;
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BannerImage from "../components/BannerImage";
import Form from "../components/Form";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        >
      <BannerImage heading="CONTACT" text="Feel free to contact me here." />
      <Form />
      </motion.div>
      <Footer />
    </div>
  );
};

export default Contact;
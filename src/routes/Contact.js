import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BannerImage from "../components/BannerImage";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <BannerImage heading="CONTACT" text="Feel free to contact me here." />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
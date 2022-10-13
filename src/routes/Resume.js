import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BannerImage from "../components/BannerImage";
import Cv from "../components/Cv";

const Resume = () => {
  return (
    <div>
      <Navbar />
      <BannerImage heading="RESUME" text="Here you can download my resume!" />
      <Cv />
      <Footer />
    </div>
  );
};

export default Resume;
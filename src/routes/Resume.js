import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BannerImage from "../components/BannerImage";
import Cv from "../components/Cv";

const Resume = () => {
  return (
    <div>
      <Navbar />
      <BannerImage heading="RESUME" text="Check out my work experience!" />
      <Cv />
      <Footer />
    </div>
  );
};

export default Resume;
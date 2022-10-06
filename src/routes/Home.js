import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeImage from "../components/HomeImage";
import Projects from "../components/Projects";
import AboutContent from "../components/AboutContent";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeImage />
      <AboutContent />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
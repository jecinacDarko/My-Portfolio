import "./HomePage.css";
import React from "react";
import IntroVideo from "../assets/videos/video.mp4"
import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import ReactPlayer from "react-player";


const HomeImage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <video controls src={IntroVideo} autoPlay loop muted type='video/mp4' className='bg-video'></video>
      </div>
      <div className="content">
        <p>Darko Jecinac</p>
        <h1>Full Stack Developer</h1>
        <div>
        <Link to="/resume" className="btn">
            Resume
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeImage;

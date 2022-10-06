import "./HomeImage.css";
import React from "react";
import IntroImg from "../assets/macbookpic.jpg";
import { Link } from "react-router-dom";

const HomeImage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
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

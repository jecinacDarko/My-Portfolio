import "./HomePage.css";
import React from "react";
import IntroVideo from "../../assets/videos/video.mp4"
import { Link } from "react-router-dom";
import { Link as LinkS } from 'react-scroll';
import MovingComponent from 'react-moving-text'

const HomeImage = () => {
  return (
    <div className="hero" id="home">
      <div className="mask">
        <video src={IntroVideo} autoPlay loop muted type='video/mp4' className='bg-video'></video>
      </div>
      <div className="content">
        
        <MovingComponent
          type="fadeInFromTop"
          duration="2500ms"
          delay="0s"
          direction="normal"
          timing="ease-in-out"
          iteration="1"
          fillMode="both">
              
          <p>Darko Jecinac</p>
          <h1>Full Stack Developer</h1>
        </MovingComponent>
        <div>
          <Link to="//drive.google.com/file/d/1vf2PPXBSpRJYQEC6--cfzbthnhnNlg6l/view?usp=share_link" className="btn">
            Resume
          </Link>
          <LinkS to="contact" className="btn btn-light" spy={true} smooth={true} offset={0} duration={700} style={{cursor:'pointer'}}>
            Contact
          </LinkS>
        </div>
      </div>
    </div>
  );
};

export default HomeImage;

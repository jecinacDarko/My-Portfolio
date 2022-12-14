import "./AboutContent.css";
import React, { useState, useEffect } from 'react';
import thumbnail from '../../assets/photos/aboutPic.jpg'
import aboutPicture from '../../assets/photos/aboutpicturealt.jpg'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutContent = () => {
  return (
    <div className='aboutSection'> 
      <div className='aboutContainer' id="about"> 
      <aside className='rightside'>
        <motion.button
          className='motionB'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          >
          <img src={aboutPicture} alt="portrait img" className="rightside_picture" />  
        </motion.button>
          </aside>
          <aside className='leftside'>    
            <img src={thumbnail} alt="portrait img" className="thumbnail" />
              <h1>About me.</h1>

            <div className='article'>
              Hi! My name is Darko! I'm a JavaScript Full Stack Developer based in Stockholm, Sweden.
              Before my professional career in TECH, I have spent 15 years working as a Music Producer, 
              Sound Engineer and was the one of the most popular DJ's and show runners in my home country 
              of Serbia. <br/><br/><br/>
              
              After many years of hobby coding and big love for technology, I've decided to make it a
              professional career. I found Salt the prestigious coding bootcamp in my current home
              city of Stockholm and this is where my journey started.<br/>
               
              <div className='contactButton'>
              {/* <Link to="/contact">
              <button className="btn">Contact</button>
             </Link> */}
             </div>
            </div>
          </aside> 
      </div>
    </div>
 
  );
};

export default AboutContent;

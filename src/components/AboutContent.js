import "./AboutContent.css";
import React from "react";
import thumbnail from '../assets/aboutPic.jpg';
import aboutPicture from '../assets/IMG_6628.jpeg'
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <section> 
      <div className='container'> 
          <aside>
            <img src={thumbnail} alt="portrait img" className="thumbnail" />
            <h1 className='about_headline'>Who Am I?</h1>
            <article>
            Hey my name is Darko. My first contact with coding was at my high school where we were learning some C & C++ and
            this is where i instantly fell in love with it. During those days i have also started working on a radio station,
            Radio As Fm that was in the begining just a small project but later became one of the highest revenue radio stations
            in Serbia. 
             
            At the radio I’ve changed many rolls. From a sound engineer, content producer to one of the most wanted dj’s and 
            show runners in the region. I've been playing music on a big festivals along the names like Hardwell, Martin Garrix,
            W&W and many more and my music has been supported by many big names in the industry as Fedde Le Grand, Bob Sinclair, 
            Roger Sanchez, Timy Trumpet, Baggi Begovic just to name a few.

            Through the music career and radio years I’ve also intended the fakulty for a sound and video production in my home 
            city of Novi Sad where I encountered coding again. I loved how things were going but i moved to Sweden because i wanted 
            to expand and grow futher in life in this land of opportunity.
            
            Not long after I got a job which was a position in a company called Brightstar which handled warehouse processes for 
            Telenor where I was making sure that imei number databases are in sync on both Telenors and Brightstars systems. 
            Here is when I decided to finaly go after the thing that next to music i love the most. I did some investigation about
            the fastest way to grow in IT industry and first thing that I’ve encountered in my Home city of Stockholm was SALT,
            School Of Applied Technology.  

            I studdied coding actively for the next year and a half before I got accepted and this is where my professional career
            has started.  
            </article>
            
            
            <Link to="/contact">
              <button className="btn">Contact</button>
            </Link>
            
          </aside>
          <div className='right'>
          <img src={aboutPicture} alt="portrait img" className="aboutPicture" />  
          </div>
      </div>
    </section>
  );
};

export default AboutContent;

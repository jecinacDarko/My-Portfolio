import "./AboutContent.css";
import React from "react";
import thumbnail from '../assets/aboutPic.jpg';
import aboutPicture from '../assets/IMG_6628.jpeg'
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <section> 
      <div className='aboutContainer' id="about"> 
          <aside className='leftside'>
            <img src={thumbnail} alt="portrait img" className="thumbnail" />
            <h1>About me.</h1>
            <article>

              Hi! My name is Darko! I'm a Full Stack Developer based in Stockholm, Sweden.
              Before I started with professional coding career I've spent 15 years working as
              a Music Producer, Sound Engineer and one of the most popular DJ's and show runners 
              in my home country of Serbia. <br/> <br/> <br/>

              <span className="techStack">
              <h2>TECH STACK:</h2>
              <br/>

              JavaScript, TypeScript,
              React, Redux, Webpack, HTML5, jQuery CSS/SASS/Styled Components,
              NodeJS,Yarn, ExpressJS, REST, HTTP, JSON, Ajax, GraphQL, MongoDB, Mongoose, PostgreSQL,
              Visual Studio Code, Atom, Pug, EJS, Mocha, Jest, TDD, Git, GitHub,
              Cloud Platforms (MongoDB Atlas, ElephantSQL, Netlify, Heroku, Contentful), AWS, Agile..
              </span>
            </article>
            
            <Link className="leftside_button" to="/contact">
              <button className="btn">Contact</button>
            </Link>
            
          </aside> 
          <aside className='rightside'>
          <img src={aboutPicture} alt="portrait img" className="rightside_picture" />  
          </aside>
      </div>
    </section>
  );
};

export default AboutContent;

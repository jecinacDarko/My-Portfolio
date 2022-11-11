import './AboutContent.css';
import React from 'react';
import thumbnail from '../assets/aboutPic.jpg';
import aboutPicture from '../assets/IMG_6628.jpeg'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const AboutContent = () => {
  return (
      <section> 
        <div className='container'> 
            <aside>
            <motion.div
                className="box"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01]
                }}
              >
              <img src={thumbnail} alt='portrait img' className='thumbnail' />
              <article className='about_article'>

                Hi! My name is Darko! I'm a Full Stack Developer based in Stockholm, Sweden.
                Before I started with professional coding career I've spent 15 years working as
                a Music Producer, Sound Engineer and one of the most popular DJ's and show runners 
                in Serbia where I was born. <br/> <br/> <br/>
                <span className='techStack'>
                <h2>TECH STACK:</h2>
                <br/>

                JavaScript, TypeScript,
                React, Redux, Webpack, HTML5, jQuery CSS/SASS/Styled Components,
                NodeJS,Yarn, ExpressJS, REST, HTTP, JSON, Ajax, GraphQL, MongoDB, Mongoose, PostgreSQL,
                Visual Studio Code, Atom, Pug, EJS, Mocha, Jest, TDD, Git, GitHub,
                Cloud Platforms (MongoDB Atlas, ElephantSQL, Netlify, Heroku, Contentful), AWS, Agile..
                </span>              
              </article>
            
              <Link to='/contact'>
                <button className='btn'>Contact</button>
              </Link>
              
              </motion.div>
            </aside>
            <div className='right'>
            <motion.button 
              className='aboutPictureWrapper'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.92 }}
            >
            <img src={aboutPicture} alt='portrait img' className='aboutPicture' />
            </motion.button>
            </div>
        </div>
        
      </section>
  );
};

export default AboutContent;

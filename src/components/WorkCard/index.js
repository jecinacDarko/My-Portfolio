import React from 'react';
import './WorkCard.css';
import '../Projects/Projects.css';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function WorkCard(props) {
  return (
       <motion.div className='projectCard'
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
      <img className='projectCard__image' img src={props.imgsrc}></img>
      <h2 className='projectCard__title' >{props.title}</h2>
      <p className='projectCard__description'>{props.description}</p>
      <div className='projectCard__links--container'>
        <Link 
          to={props.view} 
          className='projectCard__links--button'
          target='_blank'> 
          View
        </Link>
        <Link 
          to="url.com" 
          className="projectCard__links--button"
          target='_blank'>
          Source
        </Link>
      </div>
     </motion.div>
  )
}

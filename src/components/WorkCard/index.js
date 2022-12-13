import React from 'react';
import './WorkCard.css';
import '../Projects/Projects.css';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function WorkCard(props) {
  return (
    <div className='projectCard'>
      <motion.div className='image__container'
        whileHover={{ scale: 1.1 }}
        > 
        <img className='projectCard__image' img src={props.imgsrc}></img>
      </motion.div>
      <h2 className='projectCard__title' >{props.title}</h2>
      <p className='projectCard__description'>{props.description}</p>
      <div className='projectCard__links--container'>
        <Link 
          className='projectCard__links--button'
          to={props.view} 
          target={props.view}> 
          View
        </Link>
        <Link 
          className="projectCard__links--button"
          to={props.source}
          target={props.source}>
          Source
        </Link>
      </div>
     </div>
  )
}

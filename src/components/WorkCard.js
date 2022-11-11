import React from 'react';
import './WorkCard.css';
import './Projects.css';
import { Link } from "react-router-dom";
import styled from '@emotion/styled/macro';

export default function WorkCard(props) {
  return (
    <div className='projectCard'>
      <img className='projectCard__image' img src={props.imgsrc}></img>
      <h2 className='projectCard__title' >{props.title}</h2>
      <p className='projectCard__description'>{props.description}</p>
      <div className='projectCard__links--container'>
          <Link to={props.view} className="projectCard__links--button" >
            View
          </Link>
{/*           <Link to={{ pathname: "//track-mate.netlify.app/" }} className="projectCard__links--button" target="_blank">viewS</Link> */}
          <Link to="url.com" 
          className="projectCard__links--button">
            Source
          </Link>

      </div>
    </div>
  )
}

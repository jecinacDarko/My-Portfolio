import React from 'react';
import './WorkCard.css';
import trackMateImage from '../assets/projects/trackmate2.jpg'

const text = `App for tracking presence, academic and behavioral performance of students. 
Often working as a teacher, you have a lot of paperwork to do! 
And you can only get so much information from papers. 
We decided to help school teachers to track absence, 
performance and behaviour of their student easily and effortlessly.
We decided to help school teachers to track absence, 
performance and behaviour of their student easily and effortlessly.`

export default function WorkCard() {
  return (
    <div className='projectCard'>
      <h2 className='projectCard__name' >TrackMate</h2>
      <img className='projectCard__image' src={trackMateImage}></img>
      <p className='projectCard__description'>{text}</p>
      <div className='buttons__'>

      </div>
    </div>
  )
}

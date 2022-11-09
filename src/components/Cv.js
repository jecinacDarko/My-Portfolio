import React from 'react'
import ResumeImage from "../assets/resume.png";
import "./Cv.css";

export default function Cv() {
  return (
        <div className='CvContainer'>
          <h1 className="headline">Here Is My Resume.</h1>
          <div className='CvImage'>
            <img className="resume-image" src={ResumeImage} alt="ResumeImage" />
          </div>
        </div> 
  )
}
  
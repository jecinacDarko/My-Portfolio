import React from 'react'
import ResumeImage from "../assets/resume.png";
import "./Cv.css";

export default function Cv() {
  return (
        <div className='CvContainer'>
          <div className='CvImage'>
            <img className="resume-image" src={ResumeImage} alt="ResumeImage" />
          </div>
        </div> 
  )
}

import React, { useEffect, useState } from 'react'
import "./Projects.css";
import WorkCard from '../components/WorkCard';

export default function Projects() {
  return (
    <div className="projectPage">
        <h1 className="headline">CHECK OUT MY RECENT PROJECTS.</h1>
        <h2>IN CONSTRUCTION!!!</h2>
        <div className="projectsContainer">
            <WorkCard></WorkCard>
        </div>

    </div>

  )
}

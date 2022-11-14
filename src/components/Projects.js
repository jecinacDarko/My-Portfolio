import './Projects.css';
import projectCardData from '../mock-data/ProjectCardData';
import WorkCard from './WorkCard';
import motion from "framer-motion";

export default function Projects() {
  return (
    <div className='projectsPage'>
      
      <h1 className='projectsHeadline'>Latest Projects.</h1>
      <p className='projectsPage_title'>Check out my recent work</p>
      <div className="projectsContainer">
        {projectCardData.map((card, index) => {
          return (
            <WorkCard
            key={index}
            imgsrc={card.imgsrc}
            title={card.title}
            description={card.description}
            view={card.view}
            />
          );
        })}
      </div>
    </div>
  );
}

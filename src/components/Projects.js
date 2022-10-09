import "./Projects.css";
import projectCardData from '../mock-data/ProjectCardData';
import WorkCard from '../components/WorkCard';

export default function Projects() {
  return (
    <div className="projectPage">
      <h1 className="headline">MY LATEST PROJECTS</h1>
      <div className="projectContainer">
        {projectCardData.map((card, index)=> {
          return (
            <WorkCard 
            key={index}
            imgsrc={card.imgsrc}
            title={card.title}
            description={card.description}
            />
          );
        })}
          
      </div>
    </div>

  )
}

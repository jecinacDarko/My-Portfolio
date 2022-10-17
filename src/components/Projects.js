import "./Projects.css";
import projectCardData from '../mock-data/ProjectCardData';
import WorkCard from '../components/WorkCard';

export default function Projects() {
  return (
    <div className="projectPage">
      <h1 className="headline">My Latest Projects.</h1>
      <div className="projectContainer">
{/* 
      Planning to set the bolean to choose data from database if there is 
      connection or otherwise to take data from local file */}

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

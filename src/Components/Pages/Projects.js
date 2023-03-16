import React from "react";
import ProjectCards from "./ProjectCards";
import projectsInfo from '../Assets/ProjectInfo.json'
import CardGroup from 'react-bootstrap/CardGroup';



function Projects() {
    return <>
      <h2>Project Gallery</h2>
      <CardGroup>
      {projectsInfo.map(p => {
        return <ProjectCards
        let key={p.id}
        name={p.name}
        deployedLink={p.deployedLink}
        githubLink={p.repoLink}
        image={p.screenshot}
        description={p.description}
        />
      })}
      </CardGroup>
    </>
  }
  
  export default Projects;
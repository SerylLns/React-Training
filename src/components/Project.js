import React, { useState } from 'react';
import {projectData} from "../data/projectData"
const Project = (props) => {
  const [currentProject] = useState(projectData);
  const project = currentProject[props.projectNumber];
  return (
    <div className="project-main">
      <div className="project-content">
        <h1>{project.title}</h1>
        <ul className="languages">
          {project.languages.map((language) => {
            return <li key={language}>{ language }</li>
          })}
        </ul>
      </div>
      <div className="img-content">
        <div className="img-container hover">
          <span>
            <h3>{project.title}</h3>
            <p> { project.info} </p>
          </span>
          <img src={project.img} alt="" />
        </div>
        <div className="button-container">
          <a href={project.link} target="_blank" rel="noopener noreferrer"
            className="hover">
            <span className="button">Voir le site</span>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
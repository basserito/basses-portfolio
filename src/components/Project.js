import React from 'react';

const Project = ({ title, description, technologies, sourceCodeLink }) => {
  return (
    <div className="project">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <p className="project-technologies">{technologies}</p>
      <div className="project-links">
        <a href={sourceCodeLink} className="project-link" target="_blank" rel="noopener noreferrer">
          Source Code
        </a>
      </div>
    </div>
  );
};

export default Project;


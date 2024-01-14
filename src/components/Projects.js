import React from 'react';
import Project from './Project';

const Projects = () => {
  const projectsData = [
    {
      title: 'Project 1',
      description: 'Description of Project 1.',
      technologies: 'Tech stack for Project 1.',
      sourceCodeLink: 'https://github.com/your-username/project1',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2.',
      technologies: 'Tech stack for Project 2.',
      sourceCodeLink: 'https://github.com/your-username/project2',
    },

    {
        title: 'Project 3',
        description: 'Description of Project 3.',
        technologies: 'Tech Stack for Project 3',
        sourceLink: 'https://github.com/yourusername/project3',
      },
      {
        title: 'Project 4',
        description: 'Description of Project 4.',
        technologies: 'Tech Stack for Project 4',
        sourceLink: 'https://github.com/yourusername/project4',
      },
      {
        title: 'Project 5',
        description: 'Description of Project 5.',
        technologies: 'Tech Stack for Project 5',
        sourceLink: 'https://github.com/yourusername/project5',
      },
      {
        title: 'Project 6',
        description: 'Description of Project 6.',
        technologies: 'Tech Stack for Project 6',
        sourceLink: 'https://github.com/yourusername/project6',
      },
      // Add more project data objects as needed
    ];


  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-list">
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

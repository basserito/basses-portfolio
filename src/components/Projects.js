import React from 'react';
import Project from './Project';

const Projects = () => {
  const projectsData = [
    {
      title: 'Rental Manager Project',
      description: 'A Scala application where you can manage bookings',
      technologies: 'Scala',
      sourceCodeLink: 'https://github.com/basserito/Rental_managing',
    },
    {
      title: 'University Database',
      description: 'SQL database for a university course tracking system',
      technologies: 'SQL',
      sourceCodeLink: 'https://github.com/basserito/tietokanta_yliopistolle',
    },

    {
        title: 'Usability Analysis for Zalando',
        description: "Analysis of Zalando's usability through usability heuristics",
        technologies: '',
        sourceLink: 'https://github.com/basserito/zalando_usability_analysis/tree/main',
      },
      {
        title: 'Machine Learning Project',
        description: 'Predicting football game results using machine learning',
        technologies: 'Python, Pandas, NumPy, Scikit-learn',
        sourceLink: 'https://github.com/basserito/ML_predicting_football_game_wins',
      },
      {
        title: 'Scala Demo',
        description: '',
        technologies: 'Scala, Scala Swing',
        sourceLink: 'https://github.com/basserito/scala_demo',
      },
      {
        title: 'Personal Portfolio',
        description: '',
        technologies: 'React, Javascript, HTML, CSS',
        sourceLink: 'https://github.com/basserito/basses-portfolio',
      },
      // Add more project data objects as needed
    ];


  return (
    <div className="projects-container" id="projects">
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

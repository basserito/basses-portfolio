import React from 'react';
import { FaPython, FaNode, FaReact, FaDatabase, FaCss3, FaJs, FaCode, FaHtml5 } from 'react-icons/fa';
import { DiGit } from 'react-icons/di';

const Skills = () => {
  return (
    <div className="skills-container" id= "skills">
      <h2>Skills</h2>
      <div className="skills-list">
        <div className="skill">
          <FaPython className="icon" />
          <p>Python</p>
        </div>
        <div className="skill">
          <FaCode className="icon" />
          <p>Scala</p>
        </div>
        <div className="skill">
          <DiGit className="icon" />
          <p>Git</p>
        </div>
        <div className="skill">
          <FaDatabase className="icon" />
          <p>SQL Databases</p>
        </div>
        <div className="skill">
          <FaCss3 className="icon" />
          <p>CSS</p>
        </div>
        <div className="skill">
          <FaJs className="icon" />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <FaHtml5 className="icon" />
          <p>HTML</p>
        </div>
        <div className="skill">
          <FaNode className="icon" />
          <p>Node.js</p>
        </div>
        <div className="skill">
          <FaReact className="icon" />
          <p>React</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;

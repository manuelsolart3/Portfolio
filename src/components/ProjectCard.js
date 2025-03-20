import React from 'react';
import "./ProjectCardStyle.css";
import {FaArrowRight} from "react-icons/fa";
import {FiGithub} from "react-icons/fi";
import {MdOutlinePreview} from "react-icons/md";
import Tilt from 'react-parallax-tilt';

const ProjectsTitle = () => {
  return (
    <div className="section-title">
      <h1 className="projects-main-title">MY PROJECTS</h1>
    </div>
  );
};

export default function ProjectCard(props) {
  const handleGithubClick = () => {
    window.open(`${props.projectLink}`);
  }
  
  const handleDemoClick = () => {
    window.open(`${props.deployedProjectLink}`);
  }
  
  const isEducatio = props.projectTitle.includes("Educatio");
  
  // Renderiza el título general solo para el primer proyecto
  const isFirstProject = props.id === "project";

  return (
    <>
      {isFirstProject && <ProjectsTitle />}
      <div className='project-window' id={props.id}>
        <div className={`project-wrapper ${props.className}`}>
          <div className="about-project">
            <h2 className="project-title">{props.projectTitle}</h2>
            <div className="desc">{props.projectDesc}</div>
            <div className="project-buttons">
              <button className='btns' onClick={handleGithubClick}>
                <span>View on<FiGithub className="social" size={22} style={{ marginLeft: "10px", position: "relative", top: "2px", strokeWidth: "3" }}/></span>
                <FaArrowRight className='btn-arrow' size={24} style={{marginLeft: "1.2rem"}}/>
              </button>
              <button className='btns' onClick={handleDemoClick}>
                <span>Demo<MdOutlinePreview size={22} style={{ marginLeft: "10px", position: "relative", top: "2px" }}/></span>
                <FaArrowRight className='btn-arrow' size={24} style={{marginLeft: "1.2rem"}}/>
              </button>
            </div>
          </div>
          <Tilt 
            className={`project-img ${isEducatio ? 'educatio-img' : ''}`}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1500}
            gyroscope={true}
          >
            <a href={props.deployedProjectLink} target="_blank" rel="noopener noreferrer">
              <img src={props.projectImg} alt="Displaying Project" />
            </a>
          </Tilt>
        </div>
      </div>
    </>
  )
}
import React, { useState, useRef } from 'react';
import "./ProjectCardStyle.css";
import {FaArrowRight, FaImages, FaTimes, FaSearchPlus, FaSearchMinus} from "react-icons/fa";
import {FiGithub} from "react-icons/fi";
import { TbScreenShare } from "react-icons/tb";
import Tilt from 'react-parallax-tilt';

// Image Modal Component
const ImageModal = ({ images, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  const handleZoom = (e) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    if (isZoomed) {
      setIsZoomed(false);
      setZoomPosition({ x: 0, y: 0 });
    } else {
      setIsZoomed(true);
      setZoomPosition({ x, y });
    }
  };

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div 
        className="image-modal-content" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="image-modal-close" 
          onClick={onClose}
        >
          <FaTimes color="#FF9E80" />
        </button>
        
        <div className="image-modal-gallery">
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`gallery-image ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => {
                setCurrentImageIndex(index);
                setIsZoomed(false);
                setZoomPosition({ x: 0, y: 0 });
              }}
            >
              <img 
                src={img} 
                alt={`Project view ${index + 1}`} 
              />
            </div>
          ))}
        </div>
        
        <div className="image-modal-main-view">
          <div 
            className={`image-zoom-container ${isZoomed ? 'zoomed' : ''}`}
            style={{
              '--zoom-x': `${zoomPosition.x}%`,
              '--zoom-y': `${zoomPosition.y}%`
            }}
          >
            <img 
              ref={imageRef}
              src={images[currentImageIndex]} 
              alt={`Main project view ${currentImageIndex + 1}`} 
              className="main-project-image"
              onClick={handleZoom}
            />
          </div>
          <div className="image-count">
            {currentImageIndex + 1} / {images.length}
          </div>
          {isZoomed && (
            <div className="zoom-indicator">
              <FaSearchMinus /> Zoom Out
            </div>
          )}
          {!isZoomed && (
            <div className="zoom-indicator">
              <FaSearchPlus /> Zoom In
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Projects Title Component
const ProjectsTitle = () => {
  return (
    <h1 className="section-title"> Mis Projectos</h1>
  );
};

// Main Project Card Component
export default function ProjectCard(props) {
  const [showImageModal, setShowImageModal] = useState(false);

  const handleGithubClick = () => {
    window.open(`${props.projectLink}`);
  }
  
  const handleDemoClick = () => {
    window.open(`${props.deployedProjectLink}`);
  }
  
  const isEducatio = props.projectTitle.includes("Educatio");
  const isFirstProject = props.id === "project";
  const hasAdditionalImages = props.additionalImages && props.additionalImages.length > 0;

  return (
    <>
      {isFirstProject && <ProjectsTitle />}
      <div className='project-window' id={props.id}>
        <div className={`project-wrapper ${props.className}`}>
          <div className="about-project">
            <h2 className="project-title">{props.projectTitle}</h2>
            <div className="desc">{props.projectDesc}</div>
            
            {props.tools && props.tools.length > 0 && (
              <div className="project-tools">
                <h3 className="tools-title">Technologies</h3>
                <div className="tools-container">
                  {props.tools.map((tool, index) => (
                    <span key={index} className="tool-badge">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div className="project-buttons">
              <button className='btns' onClick={handleGithubClick}>
                <span>View on<FiGithub className="social" size={21} style={{ marginLeft: "10px", position: "relative", top: "2px", strokeWidth: "3" }}/></span>
                <FaArrowRight className='btn-arrow' size={24} style={{marginLeft: "1.2rem"}}/>
              </button>
              <button className='btns' onClick={handleDemoClick}>
                <span>Demo<TbScreenShare size={21} style={{ marginLeft: "10px", position: "relative", top: "2px" ,  strokeWidth: "3"}}/></span>
                <FaArrowRight className='btn-arrow' size={24} style={{marginLeft: "1.2rem"}}/>
              </button>
              {hasAdditionalImages && (
                <button 
                  className='btns gallery-btn' 
                  onClick={() => setShowImageModal(true)}
                >
                  <span>Galería<FaImages className="social" size={21} style={{ marginLeft: "10px", position: "relative", top: "2px", strokeWidth: "3" }}/></span>
                  <FaArrowRight className='btn-arrow' size={24} style={{marginLeft: "1.2rem"}}/>
                </button>
              )}
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

      {/* Modal de Imágenes */}
      {showImageModal && (
        <ImageModal 
          images={props.additionalImages} 
          onClose={() => setShowImageModal(false)} 
        />
      )}
    </>
  )
}
import React, { useState, useRef, useCallback } from "react";
import "./ProjectCardStyle.css";
import {
  FaArrowRight,
  FaTimes,
  FaSearchPlus,
  FaSearchMinus,
  FaPlus
} from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { TbScreenShare } from "react-icons/tb";
import Tilt from "react-parallax-tilt";

const ImageModal = ({ images, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const imageRef = useRef(null);

  const handleImageChange = useCallback((index) => {
    setCurrentImageIndex(index);
    setIsZoomed(false);
  }, []);

  const toggleZoom = useCallback((e) => {
    if (!imageRef.current) return;
    setIsZoomed(prev => !prev);
  }, []);

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-content" onClick={e => e.stopPropagation()}>
        <button className="image-modal-close" onClick={onClose}>
          <FaTimes color="#FF9E80" />
        </button>

        <div className="image-modal-gallery">
          {images.map((img, index) => (
            <div
              key={index}
              className={`gallery-image ${index === currentImageIndex ? "active" : ""}`}
              onClick={() => handleImageChange(index)}
            >
              <img src={img} alt={`Project view ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="image-modal-main-view">
          <img
            ref={imageRef}
            src={images[currentImageIndex]}
            alt={`Main project view ${currentImageIndex + 1}`}
            className={`main-project-image ${isZoomed ? 'zoomed' : ''}`}
            onClick={toggleZoom}
          />
          <div className="image-count">
            {currentImageIndex + 1} / {images.length}
          </div>
          <div className="zoom-indicator">
            {isZoomed ? <><FaSearchMinus /> Zoom Out</> : <><FaSearchPlus /> Zoom In</>}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsTitle = () => (
  <h1 className="section-title">Mis Proyectos</h1>
);

export default function ProjectCard(props) {
  const [showImageModal, setShowImageModal] = useState(false);

  const openLink = useCallback((url) => {
    window.open(url);
  }, []);

  const hasAdditionalImages = props.additionalImages?.length > 0;
  const isEducatio = props.id === "project4";
  const isFirstProject = props.id === "project";

  // Determine which buttons to render based on available links
  const renderButtons = () => {
    const buttons = [];

    // Always add GitHub button
    buttons.push({ 
      text: "View on", 
      icon: FiGithub, 
      onClick: () => openLink(props.projectLink) 
    });

    // Conditionally add Demo button
    if (props.deployedProjectLink) {
      buttons.push({ 
        text: "Demo", 
        icon: TbScreenShare, 
        onClick: () => openLink(props.deployedProjectLink) 
      });
    }

    return buttons.map(({ text, icon: Icon, onClick }, index) => (
      <button 
        key={index} 
        className="btns" 
        onClick={onClick}
        style={{ 
          // If only one button, center it or make it full width
          ...(buttons.length === 1 ? { 
            margin: '0 auto', 
            display: 'flex',
            justifyContent: 'center' 
          } : {}) 
        }}
      >
        <span>
          {text}
          <Icon 
            className="social" 
            size={21} 
            style={{
              marginLeft: "10px",
              position: "relative",
              top: "2px",
              strokeWidth: "3"
            }} 
          />
        </span>
        <FaArrowRight
          className="btn-arrow"
          size={24}
          style={{ marginLeft: "1.2rem" }}
        />
      </button>
    ));
  };

  return (
    <div className="project-section" id={props.id === "project" ? "project" : ""}>
      {isFirstProject && (
        <div className="projects-title-container">
          <h1 className="section-title">Mis Proyectos</h1>
        </div>
      )}
      
      <div className="project-window">
        <div className={`project-wrapper ${props.className}`}>
          <div className="about-project">
            <div className="project-header">
              <h2 className="project-title">
                {props.projectTitle}
                {hasAdditionalImages && (
                  <button 
                    className="gallery-btn" 
                    onClick={() => setShowImageModal(true)}
                  >
                    <FaPlus />
                  </button>
                )}
              </h2>
            </div>

            <div className="desc">{props.projectDesc}</div>

            {props.tools?.length > 0 && (
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
              {renderButtons()}
            </div>
          </div>

          <Tilt
            className={`project-img ${isEducatio ? "educatio-img" : ""}`}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1500}
            gyroscope={true}
          >
            <a
              href={props.deployedProjectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={props.projectImg} alt="Displaying Project" />
            </a>
          </Tilt>
        </div>
      </div>

      {showImageModal && (
        <ImageModal
          images={props.additionalImages}
          onClose={() => setShowImageModal(false)}
        />
      )}
    </div>
  );
}
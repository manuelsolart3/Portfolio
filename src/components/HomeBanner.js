import React from "react";
import "./HomeBannerStyle.css";
import profilePhoto from "../images/ProfilePhotoWhite.png";
import colombia from "../images/colombia.png";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function HomeBanner({ id }) {
  return (
    <div className="home" id={id}>
      <div className="container">
        <div className="content-wrapper">
          <div className="profile-info">
            <div className="content-section">
              <div className="intro">
                <h1 className="name">Backend Developer</h1>

                <div className="title-container">
                  <div className="role-main">
      
                    <span className="role-backend"> Manuel</span>
                    <span className="role-developer">Solarte</span>
                  </div>
                </div>

                <p className="description">
                  Desarrollador de Software de Popayán, Colombia{" "}
                  <img src={colombia} alt="Bandera de Colombia" width="20" className="flag" />.
                  <span className="highlight">{" "}Especializado en .NET, C#</span> y
                  arquitecturas limpias para APIs escalables. Transformo{" "}
                  requerimientos complejos en{" "}
                  <span className="bold">soluciones técnicas únicas</span>.
                </p>

                <div className="button-group">
                  <a
                    href="https://www.linkedin.com/in/manuel-solarte-229ba72b3/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn hire"
                  >
                    Hire Me
                  </a>
                  <a href="#contact" className="btn contact">
                    Contact
                  </a>
                </div>

                <div className="social-links">
                  <a
                    href="mailto:manuel.solarte.dev@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="Email"
                  >
                    <FaEnvelope className="social" size={30} />
                  </a>
                  <a
                    href="https://github.com/manuelsolart3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="GitHub"
                  >
                    <FaGithub className="social" size={30} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/manuel-solarte-229ba72b3/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="social" size={30} />
                  </a>
                  <a
                    href="https://www.instagram.com/manuelsolar124/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="social" size={30} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="profile-section">
            <div className="photo-container">
              <img
                src={profilePhoto}
                alt="Manuel Solarte"
                className="profile-photo"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
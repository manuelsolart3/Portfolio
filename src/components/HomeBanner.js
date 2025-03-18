import React, { useState } from "react";
import "./HomeBannerStyle.css";
import cartoon from "../images/ProfilePhotoBlack.png";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function HomeBanner({ id }) {
  const [click, setClick] = useState(false);
  const handleCLick = () => setClick(!click);
  return (
    <div className="home" id={id}>
      <div className="content">
        <div className="wrapper">
          <div className="name">Manuel Solarte</div>
          <div className="staticTitle">
            Backend
            <div className="hrLine"></div>
          </div>
          <ul className="dynamicTitle">
            <li>
              <span>Developer</span>
            </li>
          </ul>
          <a
            className="btn"
            href="https://www.linkedin.com/in/manuel-solarte-229ba72b3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hire Me
          </a>
        </div>
        <div className={click ? "social-links active" : "social-links"}>
          <a
            href="https://www.linkedin.com/in/deepajha14/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              className="social"
              size={25}
              style={{ marginRight: "2rem" }}
            />
          </a>
          <a
            href="https://github.com/Deepajha14"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              className="social"
              size={25}
              style={{ marginRight: "2rem" }}
            />
          </a>
          <a
            href="https://www.instagram.com/artsydeepa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              className="social"
              size={25}
              style={{ marginRight: "2rem" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

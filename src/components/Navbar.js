import React, { useState } from "react";
import "./NavbarStyle.css";
import { Link } from "react-scroll";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="header">
      <div className="logo">
        <div className="logo-img">
          My<span className="blink">Portfolio</span>
        </div>
      </div>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link
            className={activeSection === "home" ? "navLink active" : "navLink"}
            to="home"
            smooth={true}
            duration={300}
            onClick={() => setActiveSection("home")}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            className={activeSection === "project" ? "navLink active" : "navLink"}
            to="project"
            smooth={true}
            duration={300}
            onClick={() => setActiveSection("project")}
          >
            Projectos
          </Link>
        </li>

        <li>
          <Link
            className={activeSection === "experience" ? "navLink active" : "navLink"}
            to="experience"
            smooth={true}
            duration={300}
            onClick={() => setActiveSection("experience")}
          >
            Experiencia
          </Link>
        </li>

        <li>
          <Link
            className={activeSection === "skills" ? "navLink active" : "navLink"}
            to="skills"
            smooth={true}
            duration={300}
            onClick={() => setActiveSection("skills")}
          >
            Habilidades
          </Link>
        </li>

        <li>
          <Link
            className={activeSection === "contact" ? "navLink active" : "navLink"}
            to="contact"
            smooth={true}
            duration={300}
            onClick={() => setActiveSection("contact")}
          >
            Contacto
          </Link>
        </li>
      </ul>

      <div className="hamburger" onClick={handleClick}>
        <div className="bars">{click ? "✕" : "☰"}</div>
      </div>
    </div>
  );
}
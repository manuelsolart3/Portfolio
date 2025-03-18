import React, { useState } from "react";
import "./NavbarStyle.css";
import { Link } from "react-scroll";


export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleCLick = () => setClick(!click);
  const [activeSection, setActiveSection] = useState("home");

  return (
    <nav className="header">
      <div className="logo">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={30}
          onSetActive={() => setActiveSection("home")}
        >
          <div className="logo-img">
            <span className="blink">&lt;</span>
            <span>&#47;</span>My Portfolio<span className="blink">&gt;</span>
          </div>
        </Link>
      </div>
      <ul
        className={click ? "nav-menu active" : "nav-menu"}
        onClick={handleCLick}
      >
        <li>
          <Link
            className={`navLink ${activeSection === "project" ? "active" : ""}`}
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            duration={30}
            onSetActive={() => setActiveSection("project")}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className={`navLink ${activeSection === "about" ? "active" : ""}`}
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={30}
            onSetActive={() => setActiveSection("about")}
          >
            About
          </Link>
        </li>
        <li>
          <Link
                  className={`navLink ${activeSection === "skills" ? "active" : ""}`}
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            duration={30}
            onSetActive={() => setActiveSection("skills")}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            className={`navLink ${activeSection === "contact" ? "active" : ""}`}
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={30}
            onSetActive={() => setActiveSection("contact")}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

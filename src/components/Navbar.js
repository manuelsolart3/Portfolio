import React, { useState, useEffect, useRef } from "react";
import "./NavbarStyle.css";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const observerRef = useRef(null);
  const sectionRefs = useRef({
    home: null,
    project: null,
    experience: null,
    skills: null,
    contact: null,
  });

  const menuItems = [
    { to: "home", label: "Home" },
    { to: "project", label: "Proyectos" },
    { to: "experience", label: "Experiencia" },
    { to: "skills", label: "Habilidades" },
    { to: "contact", label: "Contacto" },
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.4,
      }
    );

    menuItems.forEach((item) => {
      const section = document.getElementById(item.to);
      if (section) {
        sectionRefs.current[item.to] = section;
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        menuItems.forEach((item) => {
          const section = sectionRefs.current[item.to];
          if (section) observerRef.current.unobserve(section);
        });
      }
    };
  }, []);

  const handleClick = () => setClick(!click);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth",
      });
      setClick(false);
    }
  };

  return (
    <div className="header">
      <div className="logo">
        <div className="logo-img">
          Mi<span className="blink">Portafolio</span>
        </div>
      </div>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {menuItems.map((item) => (
          <li key={item.to}>
            <a
              href={`#${item.to}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.to);
              }}
              className={`navLink ${
                activeSection === item.to ? "active-section" : ""
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="hamburger" onClick={handleClick}>
        {click ? "✕" : "☰"}
      </div>
    </div>
  );
}

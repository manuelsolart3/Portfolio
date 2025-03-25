import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import ProjectCard from "./components/ProjectCard";
import Experience from "./components/Experience";
import SkillCard from "./components/SkillCard";
import ContactForm from "./components/ContactForm";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <HomeBanner id="home" />

        <ProjectCard
          id="project"
          projectTitle="Bpo Labs"
          projectDesc="React JS provided me the flexibility needed to create an interactive card with a glass-like effect, which adds a sense of depth and dimension to the user interface"
          projectLink="https://github.com/manuelsolart3/Bpo_API"
          deployedProjectLink="https://bpolabsolutions.com"
          projectImg={require("./images/BpoLabs2.png")}
          tools={["React", "Three.js", "GSAP", "Tailwind CSS"]}
        />

        <ProjectCard
          id="project2"
          className="odd"
          projectTitle="SenaThreads | Red Social Empresarial"
          projectDesc=" Desarrollé el backend de una aplicación que conecta a más de 300 empleados de distintas areas, creando un canal directo para compartir información, eventos y anuncios importantes,  mejorando la comunicación corporativa."
          projectLink="https://github.com/manuelsolart3/SenaThreads"
          deployedProjectLink="https://test-sena-book.vercel.app/auth/"
          projectImg={require("./images/SenaThreads.png")}
          tools={[
            ".NET & C#",
            "ASP.NET Core",
            "Entity Framework Core",
            "JWT",
            "xUnit/NUnit Testing",
            "SQL Server",
          ]}
          additionalImages={[

            '../ima',
        
            '../images/OtraImagen1.png',
        
            '../images/OtraImagen2.png'
        
          ]}
                
        />

        <ProjectCard
          id="project3"
          projectTitle="Bpo Labs"
          projectDesc="React JS provided me the flexibility needed to create an interactive card with a glass-like effect, which adds a sense of depth and dimension to the user interface"
          projectLink="https://github.com/manuelsolart3/Bpo_API"
          deployedProjectLink="https://bpolabsolutions.com"
          projectImg={require("./images/BpoLabs2.png")}
          tools={["React", "CSS3", "JavaScript", "Node.js", "Express"]}
        />

        <ProjectCard
          id="project4"
          className="odd"
          projectTitle="Educatio MobileApp-Landing Page & Dashboard"
          projectDesc="An approach to target and heal specific health conditions by transforming the living room into a yoga studio"
          projectLink="https://github.com/manuelsolart3/EducatioApp"
          deployedProjectLink="https://educatioweb.vercel.app/home"
          projectImg={require("./images/Educatio.png")}
          tools={["React", "Three.js", "GSAP", "Tailwind CSS"]}
        />

        <Experience id="experience" />
        <SkillCard id="skills" />
        <ContactForm id="contact" />
        <Footer />
      </div>
    </>
  );
}

export default App;

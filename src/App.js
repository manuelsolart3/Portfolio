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
          className="odd"
          projectTitle="SenaThreads | Red Social Empresarial"
          projectDesc=" Desarrollé el backend de una aplicación que conecta a más de 300 empleados de distintas areas, creando un canal directo para compartir información, eventos y anuncios importantes,  mejorando la comunicación corporativa."
          projectLink="https://github.com/manuelsolart3/SenaThreads"
          deployedProjectLink="https://test-sena-book.vercel.app/auth/"
          projectImg={require("./images/SenaThreads/Home.png")}
          tools={[
            ".NET & C#",
            "ASP.NET Core",
            "Entity Framework Core",
            "JWT",
            "xUnit/NUnit Testing",
            "SQL Server",
          ]}
          additionalImages={[
            require("./images/SenaThreads/Login.png"),
            require("./images/SenaThreads/Profile.png"),
            require("./images/SenaThreads/Home2.png"),
            require("./images/SenaThreads/Notis.png"),
            require("./images/SenaThreads/Events.png"),
            require("./images/SenaThreads/Followers.png"),
            require("./images/SenaThreads/Coments.png"),
          ]}
        />

        <ProjectCard
          id="project2"
          projectTitle="SenaThreads | Red Social Empresarial"
          projectDesc=" Desarrollé el backend de una aplicación que conecta a más de 300 empleados de distintas areas, creando un canal directo para compartir información, eventos y anuncios importantes,  mejorando la comunicación corporativa."
          projectLink="https://github.com/manuelsolart3/SenaThreads"
          deployedProjectLink="https://test-sena-book.vercel.app/auth/"
          projectImg={require("./images/Commstool/Home.png")}
          tools={[
            ".NET & C#",
            "ASP.NET Core",
            "Entity Framework Core",
            "JWT",
            "xUnit/NUnit Testing",
            "SQL Server",
          ]}
          additionalImages={[
            require("./images/Commstool/Login.png"),
            require("./images/Commstool/Home1.png"),
            require("./images/Commstool/Edit2.png"),
            require("./images/Commstool/Edit1.png"),
            require("./images/Commstool/Edit3.png"),
          ]}
        />
        <ProjectCard
          id="project3"
          className="odd"
          projectTitle="Bpo Labs"
          projectDesc="React JS provided me the flexibility needed to create an interactive card with a glass-like effect, which adds a sense of depth and dimension to the user interface"
          projectLink="https://github.com/manuelsolart3/Bpo_API"
          deployedProjectLink="https://bpolabsolutions.com"
          projectImg={require("./images/Marvel/Login2.png")}
          tools={["React", "CSS3", "JavaScript", "Node.js", "Express"]}
          additionalImages={[
            require("./images/Marvel/front.png"),
            require("./images/Marvel/login.png"),
            require("./images/Marvel/Favorite.png"),
          ]}
        />

        <ProjectCard
          id="project4"
          projectTitle="Educatio MobileApp-Landing Page & Dashboard"
          projectDesc="An approach to target and heal specific health conditions by transforming the living room into a yoga studio"
          projectLink="https://github.com/manuelsolart3/EducatioApp"
          deployedProjectLink="https://educatioweb.vercel.app/home"
          projectImg={require("./images/Educatio/EducatioHome.png")}
          tools={["React", "Three.js", "GSAP", "Tailwind CSS"]}
          additionalImages={[
            require("./images/Educatio/Login.png"),
            require("./images/Educatio/History.png"),
            require("./images/Educatio/Profile.png"),
            require("./images/Educatio/Comments.png"),
          ]}
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

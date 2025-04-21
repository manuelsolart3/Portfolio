import React, { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
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
          projectDesc=" Desarrollé el backend de una plataforma que conecta a más de 300 empleados de distintas areas, creando un canal directo para compartir información, eventos y anuncios importantes,  mejorando la comunicación corporativa."
          projectLink="https://github.com/manuelsolart3/SenaThreads"
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
          projectTitle="ConnectUp | Plataforma de Gestión Empresarial"
          projectDesc=" Desarrollé el backend de dos módulos fundamentales: un sistema de Beneficios Corporativos para gestión de prestaciones y CommsTool, plataforma que centraliza eventos y comunicados institucionales. "
          projectLink="https://github.com/manuelsolart3/ApiCommstool"
          deployedProjectLink="https://www.connectup.cloud/auth"
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
          projectTitle="ComicVerse | Biblioteca Digital de Cómic"
          projectDesc="Desarrollé una aplicación web fullstack que permite a usuarios explorar, gestionar y guardar colecciones personales de cómics. Implementé autenticación segura, sistema de favoritos y catálogo dinámico, conectando lectores con su contenido favorito."
          projectLink="https://github.com/manuelsolart3/Bpo_API"
          projectImg={require("./images/Marvel/Login2.png")}
          tools={[
            ".NET",
            "C#",
            "SQL Server",
            "Entity Framework Core",
            "JWT",
            "React",
            "CSS3",
            "JavaScript",
            "HTML5",
            "Tailwind CSS",
          ]}
          additionalImages={[
            require("./images/Marvel/front.png"),
            require("./images/Marvel/login.png"),
            require("./images/Marvel/Favorite.png"),
          ]}
        />

        <ProjectCard
          id="project4"
          projectTitle="Educatio | Plataforma de Clases Personalizadas"
          projectDesc="Plataforma nacida de una necesidad personal que conecta estudiantes con docentes, facilitando clases personalizadas adaptadas a horarios y necesidades específicas. Un ecosistema tecnológico que transforma la forma de aprender, eliminando barreras tradicionales de acceso a la educación."
          projectLink="https://github.com/manuelsolart3/EducatioApp"
          deployedProjectLink="https://educatioweb.vercel.app/home"
          projectImg={require("./images/Educatio/EducatioHome.png")}
          tools={[
            "Kotlin",
            "Android",
            "React",
            "JavaScript",
            "Tailwind Css",
            "MongoDb",
            "Node.js",
            "MERN",
          ]}
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
      <Analytics />
    </>
  );
}

export default App;

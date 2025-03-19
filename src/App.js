import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import ProjectCard from './components/ProjectCard'
import Experience from './components/Experience'
import SkillCard from './components/SkillCard'
import ContactForm from './components/ContactForm'
import AnimatedCursor from "react-animated-cursor"


function App() {
  return (
    <>
    
    {/* <AnimatedCursor
      color="#fff"
      innerSize={5}
      outerSize={25}
      innerScale={1.5}
      outerScale={1.2}
      outerAlpha={0}
      outerStyle={{
        background: 'rgba(255, 255, 255, 0.8)',
        mixBlendMode: 'normal'
      }}
      innerStyle={{
        backgroundColor: '#ffe1a0'
      }}
    /> */}
    <div>
      <Navbar />
      <HomeBanner id = "home"/>
      <ProjectCard
        id = "project"
        className = "odd"
        projectTitle="SenaThreads: Internal Social Network"
        projectDesc="A platform that connects +300 employees from departments that previously did not interact, built from scratch using Clean Architecture."
        projectLink="https://github.com/manuelsolart3/SenaThreads"
        deployedProjectLink="https://test-sena-book.vercel.app/auth/"
        projectImg={require('./images/SenaThreads.png')}
      />

      <ProjectCard
        projectTitle="Bpo Labs"
        projectDesc="React JS provided me the flexibility needed to create an interactive card with a glass-like effect, which adds a sense of depth and dimension to the user interface"
        projectLink="https://github.com/manuelsolart3/Bpo_API"
        deployedProjectLink="https://bpolabsolutions.com"
        projectImg={require('./images/BpoLabs2.png')}
      />
 <ProjectCard
        id = "project"
        className = "odd"
        projectTitle="SenaThreads: Internal Social Network"
        projectDesc="A platform that connects +300 employees from departments that previously did not interact, built from scratch using Clean Architecture."
        projectLink="https://github.com/manuelsolart3/SenaThreads"
        deployedProjectLink="https://test-sena-book.vercel.app/auth/"
        projectImg={require('./images/SenaThreads.png')}
      />
      <ProjectCard
        className = "odd"
        projectTitle="Educatio MobileApp-Landing Page & Dashboard"
        projectDesc="An approach to target and heal specific health conditions by transforming the living room into a yoga studio"
        projectLink="https://github.com/manuelsolart3/EducatioApp"
        deployedProjectLink="https://educatioweb.vercel.app/home"
        projectImg={require('./images/Educatio.png')}
      />

      
      
      <Experience id = 'experience' />
      <SkillCard id = 'skills' />
      <ContactForm id = 'contact' />
      <Footer />
    </div>
    </>
  );
}

export default App;

import React from 'react';
import "./SkillCardStyle.css";
import { FaNodeJs, FaGithub, FaDocker, FaDatabase } from "react-icons/fa";
import { SiDotnet, SiCsharp, SiMicrosoftsqlserver, SiMysql, SiJavascript, SiTailwindcss, 
         SiReact, SiVisualstudiocode, SiAzuredevops, SiRedux } from "react-icons/si";
import { TbBrandCss3, TbBrandHtml5, TbApi } from "react-icons/tb";
import { DiGit } from "react-icons/di";
import './SharedStyles.css'; 


export default function SkillCard() {
  return (
    <div className="skill-container" id="skills">
      <h1 className="section-title">My Skills</h1>
      
      <div className="skill-box">
        <h2>Backend Core</h2>
        <div className="skillset">
          <abbr title="C#">
            <div className="tech-wrapper">
              <SiCsharp className="techLogo" />
              <span className="tech-name">C#</span>
            </div>
          </abbr>
          <abbr title=".NET/ASP.NET Core">
            <div className="tech-wrapper">
              <SiDotnet className="techLogo" />
              <span className="tech-name">.NET Core</span>
            </div>
          </abbr>
          <abbr title="Entity Framework Core">
            <div className="tech-wrapper">
              <SiDotnet className="techLogo" />
              <span className="tech-name">Entity Framework</span>
            </div>
          </abbr>
          <abbr title="SQL Server">
            <div className="tech-wrapper">
              <SiMicrosoftsqlserver className="techLogo" />
              <span className="tech-name">SQL Server</span>
            </div>
          </abbr>
          <abbr title="MySQL">
            <div className="tech-wrapper">
              <SiMysql className="techLogo" />
              <span className="tech-name">MySQL</span>
            </div>
          </abbr>
          <abbr title="RESTful API">
            <div className="tech-wrapper">
              <TbApi className="techLogo" />
              <span className="tech-name">RESTful API</span>
            </div>
          </abbr>
        </div>
      </div>

      <div className="skill-box">
        <h2>Frontend & UI</h2>
        <div className="skillset">
          <abbr title="JavaScript">
            <div className="tech-wrapper">
              <SiJavascript className="techLogo" />
              <span className="tech-name">JavaScript</span>
            </div>
          </abbr>
          <abbr title="React.js">
            <div className="tech-wrapper">
              <SiReact className="techLogo" />
              <span className="tech-name">React.js</span>
            </div>
          </abbr>
          <abbr title="HTML5">
            <div className="tech-wrapper">
              <TbBrandHtml5 className="techLogo" />
              <span className="tech-name">HTML5</span>
            </div>
          </abbr>
          <abbr title="CSS3">
            <div className="tech-wrapper">
              <TbBrandCss3 className="techLogo" />
              <span className="tech-name">CSS3</span>
            </div>
          </abbr>
          <abbr title="TailwindCSS">
            <div className="tech-wrapper">
              <SiTailwindcss className="techLogo" />
              <span className="tech-name">TailwindCSS</span>
            </div>
          </abbr>
        </div>
      </div>

      <div className="skill-box">
        <h2>Arquitectura & Calidad</h2>
        <div className="skillset">
          <abbr title="Clean Architecture">
            <div className="tech-wrapper">
              <SiDotnet className="techLogo" />
              <span className="tech-name">Clean Architecture</span>
            </div>
          </abbr>
          <abbr title="Principios SOLID">
            <div className="tech-wrapper">
              <FaDatabase className="techLogo" />
              <span className="tech-name">Principios SOLID</span>
            </div>
          </abbr>
          <abbr title="Patrones de Diseño">
            <div className="tech-wrapper">
              <FaDatabase className="techLogo" />
              <span className="tech-name">Patrones de Diseño</span>
            </div>
          </abbr>
          <abbr title="Programación Asíncrona">
            <div className="tech-wrapper">
              <SiRedux className="techLogo" />
              <span className="tech-name">Async Programming</span>
            </div>
          </abbr>
        </div>
      </div>

      <div className="skill-box">
        <h2>DevOps & Herramientas</h2>
        <div className="skillset">
          <abbr title="Git/GitHub">
            <div className="tech-wrapper">
              <DiGit className="techLogo" />
              <span className="tech-name">Git/GitHub</span>
            </div>
          </abbr>
          <abbr title="CI/CD">
            <div className="tech-wrapper">
              <SiAzuredevops className="techLogo" />
              <span className="tech-name">CI/CD</span>
            </div>
          </abbr>
          <abbr title="Docker">
            <div className="tech-wrapper">
              <FaDocker className="techLogo" />
              <span className="tech-name">Docker</span>
            </div>
          </abbr>
          <abbr title="Visual Studio Code">
            <div className="tech-wrapper">
              <SiVisualstudiocode className="techLogo" />
              <span className="tech-name">VS Code</span>
            </div>
          </abbr>
        </div>
      </div>
    </div>
  );
}
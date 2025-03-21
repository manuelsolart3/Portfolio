import React from "react";
import "./SkillCardStyle.css";
import {
  FaLayerGroup,
  FaCubes,
  FaPuzzlePiece,
  FaDocker,
  FaDatabase,
  FaGlobe   
} from "react-icons/fa";
import {
  SiDotnet,
  SiCsharp,
  SiMicrosoftsqlserver,
  SiMysql,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiVisualstudiocode,
  SiAzuredevops,
  SiRedux,
  SiMongodb,
  SiJsonwebtokens,
  SiTypescript,
} from "react-icons/si";
import { TbBrandCss3, TbBrandHtml5, TbApi } from "react-icons/tb";
import { DiGit } from "react-icons/di";
import "./SharedStyles.css";

export default function SkillCard() {
  return (
    <div className="skill-container" id="skills">
      <h1 className="section-title">My Skills</h1>

      <div className="skills-wrapper">
        <div className="skill-box">
          <h2>Backend Core</h2>
          <div className="skillset">
            <abbr title="C#">
              <div className="tech-wrapper">
                <div className="tech-icon-container">
                  <SiCsharp    className="techLogo" />
                </div>
                <span className="tech-name">C#</span>
              </div>
            </abbr>
            <abbr title=".NET/ASP.NET Core">
              <div className="tech-wrapper">
                <div className="tech-icon-container">
                  <SiDotnet className="techLogo" />
                </div>
                <span className="tech-name">.NET</span>
              </div>
            </abbr>
            <abbr title="Entity Framework Core">
              <div className="tech-wrapper">
                <div className="tech-icon-container">
                  <FaDatabase className="techLogo" />
                </div>
                <span className="tech-name">Entity Framework</span>
              </div>
            </abbr>
            <abbr title="Entity Framework Core">
              <div className="tech-wrapper">
                <div className="tech-icon-container">
                  <FaGlobe className="techLogo" />
                </div>
                <span className="tech-name">ASP.NET</span>
              </div>
            </abbr>
            <abbr title="RESTful API">
              <div className="tech-wrapper">
                <div className="tech-icon-container">
                  <TbApi className="techLogo" />
                </div>
                <span className="tech-name">RESTful API</span>
              </div>
            </abbr>
            <abbr title="JWT">
              <div className="tech-wrapper">
                <div className="tech-icon-container">
                  <SiJsonwebtokens className="techLogo" />
                </div>
                <span className="tech-name">JWT</span>
              </div>
            </abbr>
          </div>
        </div>

        <div className="skill-box">
          <h2>Frontend & UI</h2>
          <div className="skillset">
            <abbr title="JavaScript">
              <div className="tech-wrapper">
                <div className="tech-icon-container">
                  <SiJavascript className="techLogo" />
                </div>
                <span className="tech-name">JavaScript</span>
              </div>
            </abbr>
            <abbr title="React.js">
              <div className="tech-wrapper">
                <div className="tech-icon-container">
                  <SiReact className="techLogo" />
                </div>
                <span className="tech-name">React.js</span>
              </div>
            </abbr>
            <abbr title="TypeScript">
              <div className="tech-wrapper">
                <div className="tech-icon-container">
                  <SiTypescript className="techLogo" />
                </div>
                <span className="tech-name">TypeScript</span>
              </div>
            </abbr>
            <abbr title="TailwindCSS">
              <div className="tech-wrapper">
                <div className="tech-icon-container">
                  <SiTailwindcss className="techLogo" />
                </div>
                <span className="tech-name">TailwindCSS</span>
              </div>
            </abbr>
            <abbr title="CSS3">
              <div className="tech-wrapper">
                <div className="tech-icon-container">
                  <TbBrandCss3 className="techLogo" />
                </div>
                <span className="tech-name">CSS3</span>
              </div>
            </abbr>
            <abbr title="HTML5">
              <div className="tech-wrapper">
                <div className="tech-icon-container">
                  <TbBrandHtml5 className="techLogo" />
                </div>
                <span className="tech-name">HTML5</span>
              </div>
            </abbr>
          </div>
        </div>

        <div className="skill-box">
          <h2>Bd & Arquitectura</h2>
          <div className="skillset">
            <abbr title="SQL Server">
              <div className="tech-wrapper">
                <div className="tech-icon-container">
                  <SiMicrosoftsqlserver className="techLogo" />
                </div>
                <span className="tech-name">SQL Server</span>
              </div>
            </abbr>
            <abbr title="MySQL">
              <div className="tech-wrapper">
                <div className="tech-icon-container">
                  <SiMysql className="techLogo" />
                </div>
                <span className="tech-name">MySQL</span>
              </div>
            </abbr>
            <abbr title="Programación Asíncrona">
              <div className="tech-wrapper">
                <div className="tech-icon-container">
                  <SiMongodb className="techLogo" />
                </div>
                <span className="tech-name">Mongo Db</span>
              </div>
            </abbr>
            <abbr title="Clean Architecture">
              <div className="tech-wrapper">
                <div className="tech-icon-container">
                  <FaLayerGroup className="techLogo" />
                </div>
                <span className="tech-name">Clean Architecture</span>
              </div>
            </abbr>
            <abbr title="Principios SOLID">
              <div className="tech-wrapper">
                <div className="tech-icon-container">
                  <FaCubes className="techLogo" />
                </div>
                <span className="tech-name">Principios SOLID</span>
              </div>
            </abbr>
            <abbr title="Patrones de Diseño">
              <div className="tech-wrapper">
                <div className="tech-icon-container">
                  <FaPuzzlePiece className="techLogo" />
                </div>
                <span className="tech-name">Patrones de Diseño</span>
              </div>
            </abbr>
          </div>
        </div>

        <div className="skill-box">
          <h2>DevOps & Herramientas</h2>
          <div className="skillset">
            <abbr title="Git/GitHub">
              <div className="tech-wrapper">
                <div className="tech-icon-container">
                  <DiGit className="techLogo" />
                </div>
                <span className="tech-name">Git/GitHub</span>
              </div>
            </abbr>
            <abbr title="CI/CD">
              <div className="tech-wrapper">
                <div className="tech-icon-container">
                  <SiAzuredevops className="techLogo" />
                </div>
                <span className="tech-name">CI/CD</span>
              </div>
            </abbr>
            <abbr title="Docker">
              <div className="tech-wrapper">
                <div className="tech-icon-container">
                  <FaDocker className="techLogo" />
                </div>
                <span className="tech-name">Docker</span>
              </div>
            </abbr>
            <abbr title="Visual Studio Code">
              <div className="tech-wrapper">
                <div className="tech-icon-container">
                  <SiVisualstudiocode className="techLogo" />
                </div>
                <span className="tech-name">VS Code</span>
              </div>
            </abbr>
            <abbr title="Visual Studio Code">
              <div className="tech-wrapper">
                <div className="tech-icon-container">
                  <SiVisualstudiocode className="techLogo" />
                </div>
                <span className="tech-name">Visual Studio</span>
              </div>
            </abbr>
          </div>
        </div>
      </div>
    </div>
  );
}

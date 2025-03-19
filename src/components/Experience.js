import React from "react";
import "./ExperienceStyle.css";
import { FaCode, FaUsers, FaRocket, FaDatabase } from "react-icons/fa";

export default function Experience({ id }) {
  return (
    <div className="experience-container" id={id}>
      <div className="experience-header">
        <h1 className="sections"> My Experience</h1>
        <p className="experience-tagline">Transformando desafíos en soluciones de alto impacto</p>
      </div>
      
      <div className="job-card">
        <div className="job-header">
          <div className="job-title-container">
            <h3>Desarrollador Backend con C# y .NET</h3>
            <a href="https://bpolabsolutions.com" target="_blank" rel="noopener noreferrer" className="company">BpoLabSolutions</a>
          </div>
          <span className="job-period">Febrero 2024 – Enero 2025</span>
        </div>
        
        <div className="project-section">
          <a href="#project" className="project-title-link">
            <h4 className="project-title">SenaThreads — Red Social Interna</h4>
          </a>
          
          <div className="achievement-container">
            <div className="achievement-icon"><FaRocket /></div>
            <div className="achievement-content">
              <h5>Desafío Superado</h5>
              <p>Desarrollé el backend completo en solo <span>4 meses</span>, implementando Clean Architecture desde cero para una plataforma que conecta <span>+200 empleados</span> de departamentos que antes no interactuaban.</p>
            </div>
          </div>
          
          <div className="achievement-container">
            <div className="achievement-icon"><FaCode /></div>
            <div className="achievement-content">
              <h5>Implementación Técnica</h5>
              <p>Establecí una base sólida con <span>principios SOLID</span>, integrando <span>autenticación segura JWT</span> y construyendo una API RESTful escalable que soportará el crecimiento futuro de la plataforma.</p>
            </div>
          </div>
          
          <div className="achievement-container">
            <div className="achievement-icon"><FaUsers /></div>
            <div className="achievement-content">
              <h5>Colaboración Cross-Team</h5>
              <p>Diseñé contratos de API eficientes que facilitaron la integración con el equipo frontend, asegurando un desarrollo paralelo fluido y minimizando los conflictos de integración.</p>
            </div>
          </div>
        </div>
        
        <div className="project-section">
          <a href="https://www.connectup.cloud" target="_blank" rel="noopener noreferrer" className="project-title-link">
            <h4 className="project-title">ConnectUp — Plataforma BPO con IA</h4>
          </a>
          
          <div className="achievement-container">
            <div className="achievement-icon"><FaDatabase /></div>
            <div className="achievement-content">
              <h5>Optimización de Rendimiento</h5>
              <p>Reduje los tiempos de consulta un <span>20%</span> en el módulo de evaluación de llamadas con IA, implementando estrategias de optimización SQL y caché estratégico.</p>
            </div>
          </div>
          
          <div className="achievement-container">
            <div className="achievement-icon"><FaRocket /></div>
            <div className="achievement-content">
              <h5>Mejora de Arquitectura</h5>
              <p>Reestructuré la lógica de consultas en el módulo de registro diario, acelerando la generación de reportes en un <span>30%</span> y facilitando el acceso a información crítica para equipos operativos.</p>
            </div>
          </div>
        </div>
        
        <div className="tech-stack">
          <div className="tech-title">Tecnologías:</div>
          <div className="tech-pills">
            <span className="tech-pill">.NET 6</span>
            <span className="tech-pill">C#</span>
            <span className="tech-pill">ASP.NET Core</span>
            <span className="tech-pill">Entity Framework Core</span>
            <span className="tech-pill">SQL Server</span>
            <span className="tech-pill">JWT/Identity</span>
            <span className="tech-pill">xUnit/NUnit</span>
          </div>
        </div>
      </div>
    </div>
  );
}
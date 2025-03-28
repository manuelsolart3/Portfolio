import React from "react";
import "./ExperienceStyle.css";
import {
  FaCode,
  FaUsers,
  FaRocket,
  FaDatabase,
  FaBuilding,
} from "react-icons/fa";
import "./SharedStyles.css";

export default function Experience({ id }) {
  return (
    <div className="experience-container" id={id}>
      <div className="experience-header">
        <h1 className="section-title"> Mi Experiencia </h1>
        <p className="experience-tagline">
      Experiencia no es solo tiempo, es lo que haces con él.
        </p>
      </div>

      <div className="job-card">
        <div className="job-header">
          <div className="job-title-container">
            <h3>Desarrollador Backend con C# y .NET</h3>
            <a
              href="https://bpolabsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="company"
            >
              BpoLabSolutions
            </a>
          </div>
          <span className="job-period">Febrero 2024 – Enero 2025</span>
        </div>

        <div className="project-section">
          <a href="#project" className="project-title-link">
            <h4 className="project-title">SenaThreads — Red Social Interna</h4>
          </a>

          <div className="achievement-container">
            <div className="achievement-icon">
              <FaRocket />
            </div>
            <div className="achievement-content">
              <h5>Desafío Superado</h5>
              <p>
                Desarrollé el backend completo para una red social interna que
                conecta a más de <span>300 empleados</span>, de departamentos
                que antes no tenian comunicación directa, optimizando la
                comunicación y colaboración en tan solo <span>4 meses.</span>{" "}
              </p>
            </div>
          </div>

          <div className="achievement-container">
            <div className="achievement-icon">
              <FaCode />
            </div>
            <div className="achievement-content">
              <h5>Implementación Técnica</h5>
              <p>
                Implementé una arquitectura limpia basada en{" "}
                <span>principios SOLID</span>, integrando{" "}
                <span>autenticación segura JWT</span> y construyendo una{" "}
                <span>API RESTful</span> escalable que soportará el crecimiento
                futuro de la plataforma.
              </p>
            </div>
          </div>

          <div className="achievement-container">
            <div className="achievement-icon">
              <FaUsers />
            </div>
            <div className="achievement-content">
              <h5>Colaboración Cross-Team</h5>
              <p>
                Diseñé contratos de API eficientes que facilitaron la
                integración con el equipo frontend, asegurando un desarrollo
                paralelo <span>fluido</span> y <span>minimizando</span> los
                conflictos de integración.
              </p>
            </div>
          </div>
        </div>

        <div className="project-section">
          <a
            href="https://www.connectup.cloud"
            target="_blank"
            rel="noopener noreferrer"
            className="project-title-link"
          >
            <h4 className="project-title">ConnectUp </h4>
          </a>
          <div className="achievement-container">
            <div className="achievement-icon">
              <FaBuilding />
            </div>
            <div className="achievement-content">
              <h5>¿Que es ConnectUp?</h5>
              <p>
                Es una Subempresa especializada en servicios <span> BPO</span> y{" "}
                <span> análisis con IA</span> enfocada en analizar y optimizar
                la atención al cliente para empresas externas y corporativas.
              </p>
            </div>
          </div>
          <div className="achievement-container">
            <div className="achievement-icon">
              <FaDatabase />
            </div>
            <div className="achievement-content">
              <h5>Optimización de Rendimiento</h5>
              <p>
                En el módulo de evaluación de llamadas con IA, desarrollé una
                solución que redujo los tiempos de consulta un <span>20%</span>{" "}
                mediante optimización SQL, indexación y caché, permitiendo a los
                supervisores analizar<span> más llamadas en menos tiempo.</span>
              </p>
            </div>
          </div>

          <div className="achievement-container">
            <div className="achievement-icon">
              <FaRocket />
            </div>
            <div className="achievement-content">
              <h5>Mejora de Arquitectura</h5>
              <p>
                En el módulo de registro de llamadas diario Colaboré en la
                reestructuración de la lógica de consultas, acelerando la
                generación de reportes en un <span>30%</span> transformando el
                acceso a información crítica para equipos operativos.
                Convirtiendo un proceso de 2 horas en <span>80
                minutos.</span>
              </p>
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

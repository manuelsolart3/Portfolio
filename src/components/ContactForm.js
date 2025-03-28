import React, { useRef, useState } from "react";
import "./ContactFormStyle.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./SharedStyles.css";

export default function ContactForm({ id }) {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        "service_pv8ezti",
        "template_8d8v6xb",
        templateParams,
        "nDb3GCAPDaN_cISjW"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("¡Mensaje enviado con éxito!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });

          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          toast.error(
            "No se pudo enviar el mensaje. Por favor, refresca la página.",
            {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            }
          );
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section
      className="contact-section"
      id={id}
      aria-label="Formulario de contacto"
    >
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="section-title">Contactame</h1>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 6L12 13L2 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="info-content">
                <h3>Email</h3>
                <a
                  href="mailto:manuel.solarte.dev@gmail.com"
                  className="contact-detail-value"
                  aria-label="Enviar email a manuel.solarte.dev@gmail.com"
                >
                  manuel.solarte.dev@gmail.com
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="info-content">
                <h3>Ubicación</h3>
                <p>Popayán, Colombia</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 6V12L16 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="info-content">
                <h3>Horario</h3>
                <p>Lun-Vie: 7:00 - 18:00</p>
                <p>Sab-Dom: 7:00 - 12:00</p>
              </div>
            </div>

            <div className="social-links">
              <h3>Sígueme</h3>
              <div className="social-icons">
                <a
                  href="https://github.com/manuelsolart3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaGithub className="social" size={30} />
                </a>
                <a
                  href="https://www.linkedin.com/in/manuel-solarte-229ba72b3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaLinkedin className="social" size={30} />
                </a>
                <a
                  href="https://www.instagram.com/manuelsolar124/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaInstagram className="social" size={30} />
                </a>
              </div>
            </div>
          </div>
          <form onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Nombre
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre completo"
                className="form-input"
                required
                aria-required="true"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="correo@ejemplo.com"
                className="form-input"
                required
                aria-required="true"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Asunto
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Asunto de tu mensaje"
                className="form-input"
                required
                aria-required="true"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe tu proyecto o consulta"
                className="form-textarea"
                required
                aria-required="true"
              />
            </div>
            <button
              className={`submit-button ${isSubmitting ? "submitting" : ""}`}
              type="submit"
              disabled={isSubmitting}
              aria-label="Enviar mensaje"
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              <span className="button-icon" aria-hidden="true">
                →
              </span>
            </button>

            <ToastContainer />
          </form>
        </div>
      </div>
    </section>
  );
}

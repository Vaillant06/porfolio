import "./Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import ScrollReveal from "../ScrollReveal/ScrollReveal"

export default function Contact() {
  return (
    <section id="contact" className="snap container-fluid bg-dark py-5">
      <ScrollReveal delay={0.2}>
      <div className="container text-center">
            <h1 className="fw-bold text-white mb-4">Contact</h1>
            <p className="text-light mb-5">
            I'm open to internship and collaboration opportunities.  
            Feel free to reach out!
            </p>

        <div className="row gy-4 justify-content-center">

            {/* Email */}
            <div className="col-lg-3 col-md-4 col-10">
            <a href="mailto:sreenath2410530@ssn.edu.in" className="contact-box">
                <FaEnvelope className="contact-icon" />
                <span>Email</span>
            </a>
            </div>

            {/* LinkedIn */}
            <div className="col-lg-3 col-md-4 col-10">
            <a href="https://www.linkedin.com/in/sreenath-g-81414a326/" target="_blank" rel="noreferrer" className="contact-box">
                <FaLinkedin className="contact-icon" />
                <span>LinkedIn</span>
            </a>
            </div>

            {/* GitHub */}
            <div className="col-lg-3 col-md-4 col-10">
            <a href="https://github.com/Vaillant06" target="_blank" rel="noreferrer" className="contact-box">
                <FaGithub className="contact-icon" />
                <span>GitHub</span>
            </a>
            </div>

            <footer class="text-center text-light py-3">
            © 2025 SREENATH — ALL RIGHTS RESEVRVED.
            </footer>

            </div>
        
      </div>
      </ScrollReveal>
    </section>
  );
}

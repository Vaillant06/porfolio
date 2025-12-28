import "./Resume.css";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

export default function Resume() {
  return (
    <section id="resume" className="snap container-fluid bg-dark py-5">
      <div className="container">

        <ScrollReveal delay={0.3}>
          <h1 className="fw-bold fs-1 text-white text-center mb-4">Resume</h1>

        <div className="text-center mb-5">
            <a 
              href="/files/Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary fs-5 px-4 py-2 "
            >
              View Resume
            </a>
        </div>

        <div className="row gy-4 fade-in-up">
  
          {/* Skills */}
          <div className="col-lg-4 col-md-6 col-12">
            <div className="resume-block">
              <h3 className="resume-subtitle">Skills</h3>
              <ul className="resume-list">
                <li>Java, C, Python</li>
                <li>Flask, React</li>
                <li>OpenCV, TensorFlow</li>
                <li>Bootstrap, PostgreSQL, SQLite</li>
              </ul>
            </div>
          </div>

          {/* Certifications */}
          <div className="col-lg-4 col-md-6 col-12">
            <div className="resume-block">
              <h3 className="resume-subtitle">Certifications</h3>
              <ul className="resume-list">
                <li>Full-Stack Web Development (Java) — DevTown (Nov 2024)</li>
                <li>Agentic AI  Mini Contest (July 2025)</li>
                <li>CodSoft Online Internship (June 2025)</li>
              </ul>
            </div>
          </div>

          {/* Experience */}
          <div className="col-lg-4 col-md-6 col-12">
            <div className="resume-block">
              <h3 className="resume-subtitle">Experience</h3>
              <ul className="resume-list">
                <li className="text-light">Currently building personal projects and
                  seeking internship to apply skills in real world.
                </li>
              </ul>
            </div>
          </div>

        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

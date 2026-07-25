import { Link } from "react-router-dom";
import "./Resume.css";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const skills = [
  "Java", "Python", "JavaScript", "C", "SQL",
  "FastAPI", "Flask", "Node.js", "Express.js", "React", "Bootstrap",
  "OpenCV", "TensorFlow",
  "PostgreSQL", "Oracle", "SQLite",
  "Postman", "ApacheBench", "Git", "Jira", "Linux"
];

const tagColors = ["#FF7A00", "#9B5DE5", "#4DA8FF", "#00D4AA", "#FF6B9D", "#F9C74F"];

export default function Resume() {
  return (
    <section id="resume" className="snap container-fluid bg-dark py-5">
      <div className="container">
        <ScrollReveal delay={0.3}>
          <h1 className="fw-bold fs-1 text-white text-center mb-4">Resume</h1>

          <div className="text-center mb-5">
            <Link
              to="/files/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary fs-5 px-4 py-2"
            >
              View Resume
            </Link>
          </div>

          {/* Skills as Tags */}
          <div className="resume-block skills-block mb-4">
            <h3 className="resume-subtitle">Skills</h3>
            <div className="skills-tags">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className="skill-tag"
                  style={{
                    backgroundColor: tagColors[index % tagColors.length],
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications + Experience */}
          <div className="row gy-4 fade-in-up">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="resume-block">
                <h3 className="resume-subtitle">Certifications</h3>
                <ul className="resume-list">
                  <li>
                    <Link
                      to="https://drive.google.com/file/d/1Fjec1mVAh6yxraSiG2d71k54qSAi1lAy/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      Cloud Computing With AI
                    </Link>{" "}
                    — Unstop (May 2026)
                  </li>
                  <li>
                    Agentic AI Mini Contest — SSN AI Student Chapter(July 2025)
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-12">
              <div className="resume-block">
                <h3 className="resume-subtitle">Experience</h3>
                <ul className="resume-list">
                  <li>
                    <Link
                      to="https://drive.google.com/file/d/1638UFSbEpxYVGmDLEHYrFKI4w_HlWRsQ/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Full Stack Development Internship 
                    </Link>{" "}
                    — Tamizhan Skills (Jun 2026)
                  </li>
                  <li>
                    <Link to="https://drive.google.com/file/d/1mNi-BapUWOdNk7AW4Q-wp-aJ6DsKE_nR/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      Web Development Internship
                    </Link>{" "}
                     — Codsoft (June 2025)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Leadership & Activities */}
          <div className="row fade-in-up mt-4">
            <div className="col-12">
              <div className="resume-block">
                <h3 className="resume-subtitle">Leadership &amp; Activities</h3>
                <ul className="resume-list">
                  <li>
                    <strong>
                      <Link 
                        to="https://drive.google.com/file/d/1XFQi2j4D2h4rAcpIeZUfCQLkTMG6eJU4/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Core Committee Member
                      </Link>
                    </strong> of SSN ProCodeClub — organizing technical workshops, coding events and peer-learning initiatives.
                  </li>
                  <li>
                    <strong>
                      <Link
                        to="https://drive.google.com/file/d/1d0mFYr0qe8LqXTzFA12521fu72cxRcze/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Active Member
                      </Link>
                    </strong> of the IEEE Electron Devices Society, a global professional community dedicated to advancing electron device technologies.
                  </li>
                  <li>
                    <strong>Placement Committee Member</strong> at SSN College of Engineering —
                    coordinating placement activities and facilitating communication between students and the placement cell.
                  </li>
                  <li>
                    <strong>Active Volunteer</strong> at SSN Youth Red Cross —
                    contributing to social initiatives and community service activities.
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

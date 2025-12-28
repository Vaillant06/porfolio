import "./ProjectCard.css";

import ScrollReveal from "../ScrollReveal/ScrollReveal";

export default function ProjectCard({ project, delay, isActive, onView }) {
  return (
    <div className="col-md-4">
      <ScrollReveal delay={delay}>
        <div className={`card h-100 project-card ${isActive ? "active-card" : ""} fade-in-up`}>
          <div className="card-body">
            <h5 className="card-title fw-bold">{project.title}</h5>
            <p className="card-text">{project.description}</p>

            <div className="small tech-preview text-light mb-3">
              {project.tech.slice(0, 3).join(" • ")}
            </div>

            <button className="btn primary" onClick={onView}>
                <i className="bi bi-eye me-2"></i>
                View
            </button>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}

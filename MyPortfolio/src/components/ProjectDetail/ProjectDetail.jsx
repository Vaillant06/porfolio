import "./ProjectDetail.css";

import ScrollReveal from "../ScrollReveal/ScrollReveal";
import ProjectCarousel from "../ProjectCarousel/ProjectCarousel";

export default function ProjectDetail({ project, refProp, onClose }) {
  return (
    <ScrollReveal>
      <div ref={refProp} className="mt-5 mb-3 p-4 rounded project-detail-container">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h3 className="fw-bold detail-title mb-0">
            {project.title}
          </h3>

          <button className="btn secondary" onClick={onClose}>
            Close
            <i className="bi bi-x-circle mx-1"></i>
          </button>
        </div>

        <div className="row align-items-start p-2 mt-5">
          <div className="col-lg-4">
            <h4 className="fw-bold mb-2">Description</h4>
            <h5 className="mb-5">{project.description}</h5>

            <h4 className="fw-bold">Tech Stack</h4>
            <ul className="mb-5">
              {project.tech.map((item, i) => (
                <li key={i} className="fs-5">{item}</li>
              ))}
            </ul>

            <h4 className="fw-bold">GitHub Repository</h4>
            {project.repo && (<>
            <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn primary mt-2 mb-5 px-4"
            >
              <i className="bi bi-folder2 me-2"></i>
                GitHub Repo
            </a>
            </>
            )}
          </div>

          <div className="col-lg-8">
            <ProjectCarousel project={project} />
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

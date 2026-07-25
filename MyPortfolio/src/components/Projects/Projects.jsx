import "./Projects.css";

import { useState, useRef } from "react";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectDetail from "../ProjectDetail/ProjectDetail";

import ProjectContent from "../../constants/ProjectContent"

export default function Projects() {

  const [selectedProject, setSelectedProject] = useState(ProjectContent[0]);
  const detailRef = useRef(null);

  return (
    <section id="projects" className="snap container-fluid bg-dark py-5">
      <ScrollReveal delay={0.3}>
      <div className="container-fluid">
          <h1 className="fw-bold fs-1 text-white text-center mb-2">Projects</h1>
          <p className="text-light text-center mb-5">
            Click view to see projects in detail
          </p>

        <div className="row g-4">
          {ProjectContent.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isActive={selectedProject?.id === project.id}
              onView={() => {
                setSelectedProject(project)
                setTimeout(() => {
                  detailRef.current?.scrollIntoView({ behavior: "smooth" })
                }, 200)
              }}
            />
          ))}
        </div>

        {selectedProject && (
          <ProjectDetail
            project={selectedProject}
            refProp={detailRef}
            onClose={() => {
              setSelectedProject(null)
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
          />
        )}
      </div>
      </ScrollReveal>
    </section>
  );
}

import "./Projects.css";

import { useState, useRef } from "react";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectDetail from "../ProjectDetail/ProjectDetail";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Real Time Crack Detection System",
      description:
        "Real Time Detecting cracks in concrete as well as roads using ML + CV to support early maintenance decisions.",
      tech: ["Python", "OpenCV", "TensorFlow", "Flask"],
      repo : "https://github.com/Vaillant06/Crack_Detection",
      images: ["/images/crackDetection01.jpg", 
        "/images/crackDetection02.jpg", 
        "/images/crackDetection03.jpg",
        "/images/crackDetection04.jpg",
        "/images/crackDetection05.jpg"
      ]
    },
    {
      id: 2,
      title: "Complaint Management System",
      description:
        "Platform for reporting & resolving intra-community issues with transparency.",
      tech: ["Flask", "PostgreSQL", "Bootstrap"],
      repo : "https://github.com/Vaillant06/ComplaintManagementSystem",
      images: [
        "/images/cmsAdminDashboard.png",
        "/images/cmsSummary.png",
        "/images/cmsAnalytics1.png",
        "/images/cmsAnalytics2.png",
        "/images/cmsAnalytics3.png"
      ]
    },
    {
      id: 3,
      title: "Personalized Expense Tracker",
      description:
        "Personalized application helpful for college students to view and maintain their expenses.",
      tech: ["Flask", "SQLite", "BootStrap"],
      repo : "https://github.com/Vaillant06/expense-tracker",
      images: [
        "/images/ExpenseTrackerLanding.jpeg",
        "/images/ExpenseTrackerRegister.jpeg",
        "/images/ExpenseTrackerLogin.jpeg",
        "/images/ExpenseTrackerDashboard.jpeg",
        "/images/ExpenseTrackerAddExpense.png"
      ]
    }
  ];

  const [selectedProject, setSelectedProject] = useState(projects[0]);
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
          {projects.map((project) => (
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

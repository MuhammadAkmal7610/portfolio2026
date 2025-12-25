import { useState } from "react";
 

const allProjects = [
  {
    _id: "1",
    title: "ERP Management System",
    description:
      "A comprehensive ERP system for managing employees, inventory, sales, and reports with role-based access control.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "ERP",
      "Tailwind CSS",
      "TypeScript",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/erp-system",
  },
  {
    _id: "2",
    title: "Next.js Portfolio Website",
    description:
      "A fast, SEO-optimized portfolio built with Next.js and Tailwind CSS.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/next-portfolio",
  },
  {
    _id: "3",
    title: "E-Commerce Platform",
    description:
      "A scalable MERN-based e-commerce application with authentication, cart, and order management.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    imageUrl:
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/ecommerce-app",
  },
  {
    _id: "4",
    title: "Task Management App",
    description:
      "A task management application with JWT authentication and REST APIs.",
    technologies: ["MERN Stack", "JWT", "TypeScript"],
    imageUrl:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/task-manager",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const technologies = [
    "All",
    ...new Set(allProjects.flatMap((project) => project.technologies)),
  ];

  const filteredProjects =
    filter === "All"
      ? allProjects
      : allProjects.filter((project) =>
          project.technologies.includes(filter)
        );

  return (
    <section className="container py-5" id="projects">
      <div className="text-center mb-4">
        <h1 className="fw-bold">Projects</h1>
        <p className="lead text-body-secondary">
          Projects built using modern frameworks, tools, and enterprise-level
          solutions
        </p>
      </div>

      {/* FILTERS */}
      <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
        {technologies.map((tech) => (
          <button
            key={tech}
            className={`btn btn-sm ${
              filter === tech ? "btn-primary" : "btn-outline-secondary"
            }`}
            onClick={() => setFilter(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* PROJECT CARDS */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {filteredProjects.map((project) => (
          <div className="col" key={project._id}>
            <div className="card project-card h-100 border-0 shadow-sm">
              <div className="image-wrapper">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="card-img-top"
                />
              </div>

              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>

                <p className="card-text text-body-secondary">
                  {project.description}
                </p>

                <div className="mb-3 d-flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="badge rounded-pill text-bg-secondary fw-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto d-flex justify-content-end gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline-primary"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline-dark"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

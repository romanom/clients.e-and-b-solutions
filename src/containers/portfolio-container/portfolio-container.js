import React from "react";
import Link from "../../atoms/link";
import projects from "../../content/projects";

import "./portfolio-container.scss";

const PortfolioContainer = () => (
  <div className="portfolio-container">
    {projects.map(project => (
      <Link
        className="portfolio-container__project"
        key={project.key}
        href={`/project?projectId=${project.key}`}
      >
        <img
          alt={project.thumbnail.alt}
          className="portfolio-container__project-thumbnail"
          src={project.thumbnail.src}
        />
      </Link>
    ))}
  </div>
);

export default PortfolioContainer;

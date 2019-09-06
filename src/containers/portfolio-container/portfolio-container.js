import React from "react";
import Link from "next/link";
import projects from "../../content/projects";

import "./portfolio-container.scss";

const PortfolioContainer = () => (
  <div className="portfolio-container">
    {projects.map(project => (
      <Link key={project.key} href={`/project?projectId=${project.key}`}>
        <a className="portfolio-container__project">
          <img
            alt={project.thumbnail.alt}
            className="portfolio-container__project-thumbnail"
            src={project.thumbnail.src}
          />
        </a>
      </Link>
    ))}
  </div>
);

export default PortfolioContainer;

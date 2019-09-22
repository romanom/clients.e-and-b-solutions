import React from "react";
import PropTypes from "prop-types";
import ProjectImages from "../../components/project-images";
import ProjectDetails from "../../components/project-details";
import projects from "../../content/projects";

import "./project-container.scss";

const ProjectContainer = ({ projectId }) => {
  const project = projects.find(project => project.projectId === projectId);

  if (!project) return <div />;

  const { details, images } = project;

  return (
    <div className="project-container">
      <ProjectImages images={images} />
      <ProjectDetails {...details} />
    </div>
  );
};

ProjectContainer.propTypes = {
  projectId: PropTypes.string.isRequired
};

export default ProjectContainer;

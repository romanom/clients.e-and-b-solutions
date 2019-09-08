import React from "react";
import PropTypes from "prop-types";
import ProjectImages from "../../components/project-images";
import ProjectDetails from "../../components/project-details";
import projects from "../../content/projects";

import "./project-container.scss";

const ProjectContainer = ({ projectId }) => {
  const project = projects.find(project => project.projectId === projectId);

  if (!project) return <div />;

  const { client, date, details, features, images, projectType } = project;

  return (
    <div className="project-container">
      <h1>{client}</h1>
      <ProjectImages images={images} />
      <ProjectDetails
        date={date}
        details={details}
        features={features}
        projectType={projectType}
      />
    </div>
  );
};

ProjectContainer.propTypes = {
  projectId: PropTypes.string.isRequired
};

export default ProjectContainer;

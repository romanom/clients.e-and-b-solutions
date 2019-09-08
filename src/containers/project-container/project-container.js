import React from "react";
import PropTypes from "prop-types";
import ProjectImages from "../../components/project-images";
import ProjectDetails from "../../components/project-details";
import projects from "../../content/projects";

import "./project-container.scss";

const ProjectContainer = ({ projectId }) => (
  <div className="project-container">
    <h5>ProjectId: {projectId}</h5>
    <ProjectImages />
    <ProjectDetails />
  </div>
);

ProjectContainer.propTypes = {
  projectId: PropTypes.string.isRequired
};

export default ProjectContainer;

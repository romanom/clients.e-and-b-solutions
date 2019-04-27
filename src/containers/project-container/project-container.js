import React from "react";
import PropTypes from "prop-types";
import projects from "../../content/projects";
import "./project-container.scss";

export default class ProjectContainer extends React.Component {
  componentDidMount() {
    const { projectId } = this.props.match.params;
    const project = projects[projectId];

    if (!project) {
      this.props.history.push("/not_found");
    }
  }

  render() {
    const { projectId } = this.props.match.params;
    const project = projects[projectId];

    if (!project) {
      return <div />;
    }

    return (
      <div className="project_container">
        <div className="project_container__header">
          <div className="project_container__header-title">{project.title}</div>
          <div className="project_container__header-client">
            Client:&nbsp;{project.client}
          </div>
          <div className="project_container__header-date">
            Date:&nbsp;{project.date}
          </div>
          <div className="project_container__header-info">
            {project.information}
          </div>
          {project.informationCont && (
            <div className="project_container__header-info">
              {project.informationCont}
            </div>
          )}
        </div>
        <div className="project_container__content">
          {project.images.map((image, index) => (
            <img key={index} src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>
    );
  }
}

ProjectContainer.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

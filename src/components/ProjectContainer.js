import React from 'react';
import PropTypes from 'prop-types';
import history from '../tools/history';
import projects from '../content/projects'


export default class ProjectContainer extends React.Component {
  componentDidMount() {
    const { projectId } = this.props.match.params;
    const project = projects[projectId]

    if (!project) {
      history.push('/not_found');
    }
  }

  render() {
    const { projectId } = this.props.match.params;
    const project = projects[projectId];

    if (!project) {
      return <div />;
    }

    return (
      <div className="project">
        <div className="project__header">
          <div className="project__header-title">{project.title}</div>
          <div className="project__header-client">Client:&nbsp;{project.client}</div>
          <div className="project__header-date">Date:&nbsp;{project.date}</div>
          <div className="project__header-info">{project.information}</div>
          {project.informationCont && <div className="project__header-info">{project.informationCont}</div>}
        </div>
        <div className="project__content">
          {project.images.map((image, index) => <img key={index} src={image.src} alt={image.alt} />)}
        </div>
      </div>
    );
  }
}

ProjectContainer.propTypes = {
  match: PropTypes.object.isRequired,
};

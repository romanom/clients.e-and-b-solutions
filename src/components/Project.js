import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ project }) => (
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

Project.propTypes = {
  project: PropTypes.object.isRequired
};

export default Project;

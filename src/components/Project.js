import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ project }) => (
  <div className="project">
    <div className="project__header">
      <h3>{project.name}</h3>
      <p>Client: {project.client}</p>
      <p>Date: {project.date}</p>
      <p>{project.information}</p>
      {project.informationCont && <p>{project.informationCont}</p>}
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

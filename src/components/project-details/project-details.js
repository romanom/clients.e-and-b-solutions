import React from "react";
import PropTypes from "prop-types";

import "./project-details.scss";

const ProjectDetails = ({ client, date, design, features, overview }) => (
  <div className="project-details">
    <div className="project-details__header">
      <h1 className="project-details__client">{client}</h1>
      <p className="project-details__date">{date}</p>
    </div>
    <div className="project-details__overview">
      <h2 className="project-details__overview-title">Overview</h2>
      <p className="project-details__overview-content">{overview}</p>
    </div>
    <div className="project-details__design">
      <h4 className="project-details__design-title">Design</h4>
      <p className="project-details__design-content">{design}</p>
    </div>
    <div className="project-details__features">
      <h4 className="project-details__features-title">Features</h4>
      <ul className="project-details__features-list">
        {features.map((feature, index) => (
          <li key={index} className="project-details__features-list-item">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

ProjectDetails.propTypes = {
  client: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  design: PropTypes.string.isRequired,
  features: PropTypes.array.isRequired,
  overview: PropTypes.string.isRequired
};

export default ProjectDetails;

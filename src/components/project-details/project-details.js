import React from "react";
import PropTypes from "prop-types";

import "./project-details.scss";

const ProjectDetails = ({ client, date, design, features, overview, type }) => (
  <div className="project-details">
    <h1 className="project-details__client">{client}</h1>
    <p className="project-details__date">{date}</p>
    <p className="project-details__type">{type}</p>
    <h2 className="project-details__overview">{overview}</h2>
    <p className="project-details__design">{design}</p>
    <ul className="project-details__features">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
  </div>
);

ProjectDetails.propTypes = {
  client: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  design: PropTypes.string.isRequired,
  features: PropTypes.array.isRequired,
  overview: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default ProjectDetails;

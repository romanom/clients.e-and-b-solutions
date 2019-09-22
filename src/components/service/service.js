import React from "react";
import PropTypes from "prop-types";

import "./service.scss";

const Service = ({ content, image, title }) => (
  <div className="service">
    <img className="service__image" src={image.src} alt={image.alt} />
    <div className="service__title">{title}.</div>
    <div className="service__content">{content}</div>
  </div>
);

Service.propTypes = {
  content: PropTypes.string.isRequired,
  image: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  }),
  title: PropTypes.string.isRequired
};

export default Service;

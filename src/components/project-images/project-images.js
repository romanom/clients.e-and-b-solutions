import React from "react";
import PropTypes from "prop-types";
import Carousel from "../../atoms/carousel";

import "./project-images.scss";

const ProjectImages = ({ images }) => (
  <div className="project-images">{images && <Carousel images={images} />}</div>
);

ProjectImages.propTypes = {
  images: PropTypes.array.isRequired
};

export default ProjectImages;

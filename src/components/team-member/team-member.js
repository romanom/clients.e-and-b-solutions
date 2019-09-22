import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import "./team-member.scss";

const TeamMember = ({ image, linkedInUrl, name, title }) => (
  <div className="team-member">
    <img className="team-member__image" src={image.src} alt={image.alt} />
    <div className="team-member__name">{name}</div>
    <div className="team-member__title">{title}</div>
    <a href={linkedInUrl} className="team-member__link">
      <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
    </a>
  </div>
);

TeamMember.propTypes = {
  image: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  }),
  linkenInUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default TeamMember;

import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/fontawesome-free-brands'

const team_member_1 = { imageLocation: '/images/team_member1.jpg', alt: 'Aaron Sisler' };

const linkedInUrl = "https://www.linkedin.com/in/aaron-sisler-capm-24686b58";

const TeamSection = () => (
  <div className="team">
    <header>
      <h2>Our Amazing Team</h2>
      <h3>Hiring Local</h3>
    </header>
    <div className="team__members">
      <div className="team__members-member">
        <img src={team_member_1.imageLocation} alt={team_member_1.alt} />
        <h4>Aaron Sisler</h4>
        <p>Lead Developer</p>
        <a href={linkedInUrl}>
          <FontAwesomeIcon className="icon" icon={faLinkedinIn} size='4x' />
        </a>
      </div>
    </div>
  </div>
);

export default TeamSection;

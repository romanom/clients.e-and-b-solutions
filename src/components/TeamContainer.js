import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/fontawesome-free-brands'

const team_member_1 = { imageLocation: '/images/team_member1.jpg', alt: 'Aaron Sisler' };

const linkedInUrl = "https://www.linkedin.com/in/aaron-sisler-capm-24686b58";

const TeamSection = () => (
  <div className="team">
    <div className="team__header">
      <div className="team__header-title">Our Amazing Team</div>
      <div className="team__header-title-secondary">Hiring Local</div>
    </div>
    <div className="team__members">
      <div className="team__members-member">
        <img src={team_member_1.imageLocation} alt={team_member_1.alt} />
        <div className="team__members-member-name">Aaron Sisler</div>
        <div className="team__members-member-title">Lead Developer</div>
        <div className="team__members-member-link">
          <a href={linkedInUrl}>
            <FontAwesomeIcon icon={faLinkedinIn} size='4x' />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default TeamSection;

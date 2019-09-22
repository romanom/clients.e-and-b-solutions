import React from "react";
import TeamMember from "../team-member";
import team from "../../content/team";

import "./team.scss";

const Team = () => (
  <div className="team">
    <div className="team__header">
      <div className="team__header-title">Our Amazing Team</div>
    </div>
    <div className="team__members">
      {team.map((teamMember, index) => (
        <TeamMember key={index} {...teamMember} />
      ))}
    </div>
  </div>
);

export default Team;

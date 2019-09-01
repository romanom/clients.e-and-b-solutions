import React from "react";
import Landing from "../../components/landing";
import Services from "../../components/services";
import Team from "../../components/team";

import "./landing-container.scss";

const LandingContainer = () => (
  <div className="landing-container">
    <Landing />
    <Services />
    <Team />
  </div>
);

export default LandingContainer;

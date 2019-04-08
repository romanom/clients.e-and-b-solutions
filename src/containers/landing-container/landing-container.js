import React from "react";
import { Link } from "react-router-dom";
import "./landing-container.scss";

class LandingContainer extends React.Component {
  render() {
    return (
      <div className="landing_container__splash">
        <div className="landing_container__splash-text">
          It&apos;s nice to meet you
        </div>
        <div className="landing_container__splash-link">
          <Link to="/pricing" className="link">
            Let&apos;s Get Started
          </Link>
        </div>
      </div>
    );
  }
}

export default LandingContainer;

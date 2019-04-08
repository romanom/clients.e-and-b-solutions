import React from "react";
import { Link } from "react-router-dom";
import { handlePageView, handleEvent } from "../tools/analytics";
import { navigateByButtonEvent } from "../tools/analytics_events";
import ServicesContainer from "./ServicesContainer";
import TeamContainer from "./TeamContainer";

export default class LandingPage extends React.Component {
  componentDidMount() {
    handlePageView();
  }

  handleAnalyticsEvent = () => handleEvent(navigateByButtonEvent);

  render() {
    return (
      <div className="landing_page">
        <div className="landing_page__splash">
          <div className="landing_page__splash-text">
            It&apos;s nice to meet you
          </div>
          <div className="landing_page__splash-link">
            <Link
              to="/pricing"
              onClick={this.handleAnalyticsEvent}
              className="link"
            >
              Let&apos;s Get Started
            </Link>
          </div>
        </div>
        <ServicesContainer />
        <TeamContainer />
      </div>
    );
  }
}

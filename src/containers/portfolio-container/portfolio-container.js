import React from "react";
import { Link } from "react-router-dom";
import projects from "../../content/projects";
import "./portfolio-container.scss";

export default class PortfolioContainer extends React.Component {
  render() {
    return (
      <div className="portfolio_container">
        <div className="portfolio_container__title">
          Click on a project below to see more information
        </div>
        <div className="portfolio_container__projects">
          {projects.map((project, index) => (
            <Link to={`/project/${index}`} key={index}>
              <img src={project.clickableImage} alt="" />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

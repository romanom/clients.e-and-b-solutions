import React from "react";
import { Link } from "react-router-dom";
import projects from "../../content/projects";

export default class PortfolioContainer extends React.Component {
  render() {
    return (
      <div className="portfolio">
        <div className="portfolio__title">
          Click on a project below to see more information
        </div>
        <div className="portfolio__projects">
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

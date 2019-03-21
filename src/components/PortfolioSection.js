import React from 'react';
import Modal from './core/Modal';
import Project from './Project';
import { projects } from '../content/projects';

export default class PortfolioSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProject: undefined
    }
  }

  handleSelectedProject = (index) => this.setState({ selectedProject: projects[index] });

  closeSelectedProject = () => this.setState({ selectedProject: undefined });

  render() {
    const { selectedProject } = this.state;

    return (
      <div className="portfolio_section">
        <div className="portfolio_section__title">
          Click on a project below to see more information
        </div>
        <div className="portfolio_section__projects">
          {projects.map((project, index) => (
            <img
              key={index}
              data_index={index}
              src={project.clickableImage}
              alt=""
              onClick={() => { this.handleSelectedProject(index) }}
            />
          ))}
        </div>
        {selectedProject &&
          <Modal
            isOpen={!!selectedProject}
            onClose={this.closeSelectedProject}
          >
            <Project project={selectedProject} />
          </Modal>
        }
      </div>
    );
  }
}

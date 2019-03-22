import React from 'react';
import Modal from './core/Modal';
import Project from './Project';
import { projects } from '../content/projects';

export default class PortfolioSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      selectedProject: undefined
    }
  }

  handleSelectedProject = (index) => this.setState({ isModalOpen: true, selectedProject: projects[index] });

  closeSelectedProject = () => this.setState({ isModalOpen: false, selectedProject: undefined });

  render() {
    const { isModalOpen, selectedProject } = this.state;

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
        {isModalOpen &&
          <Modal
            isOpen={isModalOpen}
            onClose={this.closeSelectedProject}
          >
            <Project project={selectedProject} />
          </Modal>
        }
      </div>
    );
  }
}

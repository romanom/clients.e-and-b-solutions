import React from 'react';
import PortfolioModal from './PortfolioModal';
import { projects } from '../content/projects';
import { handleEvent } from '../tools/analytics';
import { openModalEvent, closeModalEvent } from '../tools/analytics_events';

export default class PortfolioSection extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelectedProject = this.handleSelectedProject.bind(this);
        this.closeSelectedProject = this.closeSelectedProject.bind(this);
        this.state = {
            selectedProject: undefined
        }
    }

    handleSelectedProject(index) {
        handleEvent(openModalEvent);
        this.setState({
            selectedProject: projects[index]
        });
    }

    closeSelectedProject() {
        handleEvent(closeModalEvent);
        this.setState({ selectedProject: undefined });
    }

    render() {
        return (
            <section id="portfolio">
                <header>
                    <h3>Click on a project below to see more information</h3>
                </header>
                <div className="projects">
                    {projects.map((project, index) => (
                         <img key={index} data_index={index} src={project.clickableImage} onClick={() => { this.handleSelectedProject(index) }} />
                    ))}
                </div>
                <PortfolioModal
                    selectedProject={this.state.selectedProject}
                    closeSelectedProject={this.closeSelectedProject}
                />
            </section>
        );
    }
}

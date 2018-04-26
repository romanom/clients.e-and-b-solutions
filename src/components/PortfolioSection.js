import React from 'react';
import PortfolioModal from './PortfolioModal';
import { projects } from '../content/projects';

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
        this.setState({
            selectedProject: projects[index]
        });
    }

    closeSelectedProject() {
        this.setState({ selectedProject: undefined });
    }

    render() {
        return (
            <section id="portfolio">
                <div className="projects">
                    {projects.map((project, index) => {
                        return <img key={index} data_index={index} src={project.clickableImage} onClick={() => { this.handleSelectedProject(index) }} />
                    })}
                </div>
                <PortfolioModal
                    selectedProject={this.state.selectedProject}
                    closeSelectedProject={this.closeSelectedProject}
                />
            </section>
        );
    }
}
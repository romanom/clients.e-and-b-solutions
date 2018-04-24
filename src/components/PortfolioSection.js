import React from 'react';
import PortfolioModal from './PortfolioModal';
import Modal from 'react-modal';

export default class PortfolioSection extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelectedProject = this.handleSelectedProject.bind(this);
        this.closeSelectedProject = this.closeSelectedProject.bind(this);
        this.state = {
            selectedProject: undefined
        }
    }

    handleSelectedProject() {
        this.setState({ selectedProject: 'First Project' });
    }

    closeSelectedProject() {
        console.log('I am here');
        this.setState({ selectedProject: undefined });
    }

    render() {
        return (
            <section id="porfolio">
                <button onClick={this.handleSelectedProject}>Open Project</button>
                <PortfolioModal
                    // selectedProject={this.state.selectedProject}
                    selectedProject='Taco'
                    closeSelectedProject={this.closeSelectedProject}
                />
            </section>
        );
    }
}
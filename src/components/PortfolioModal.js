import React from 'react';
import Modal from 'react-modal';

const PortfolioModal = (props) => (
    <Modal
        isOpen={!!props.selectedProject}
        onRequestClose={props.closeSelectedProject}
        // contentLabel="Selected Project"
        closeTimeoutMS={200}
        className="project_modal"
        appElement={document.getElementById('app')}
    >
        <button onClick={props.closeSelectedProject}>Close Project</button>
        <section id="project_modal_header">
            <h3>{props.selectedProject.name}</h3>
            <p>{props.selectedProject.client}</p>
            <p>{props.selectedProject.date}</p>
        </section>
        <section id="project_modal_content">
        
        </section>
        <button onClick={props.closeSelectedProject}>Close Project</button>
    </Modal>
);

export default PortfolioModal;
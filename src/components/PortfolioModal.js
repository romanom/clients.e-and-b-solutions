import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

const PortfolioModal = (props) => (
    <Modal
        isOpen={!!props.selectedProject}
        onRequestClose={props.closeSelectedProject}
        closeTimeoutMS={200}
        className="project_modal"
        appElement={document.getElementById('app')}
    >
        {props.selectedProject && (
            <section>
                <div className="close_modal">
                    <span className="close_modal_span" onClick={props.closeSelectedProject}>&times;</span>
                </div>
                <div className="project_modal_header">
                    <h3>{props.selectedProject.name}</h3>
                    <p>Client: {props.selectedProject.client}</p>
                    <p>Date: {props.selectedProject.date}</p>
                    <p>{props.selectedProject.information}</p>
                    {props.selectedProject.informationCont && <p>{props.selectedProject.informationCont}</p>}
                </div>
                <div className="project_modal_content">
                    {props.selectedProject.images.map((image, index) => <img key={index} src={image.src} alt={image.alt} />)}
                </div>
            </section>
        )}
    </Modal>
);

PortfolioModal.propTypes = {
    selectedProject: PropTypes.any,
    closeSelectedProject: PropTypes.func.isRequired,
};

export default PortfolioModal;
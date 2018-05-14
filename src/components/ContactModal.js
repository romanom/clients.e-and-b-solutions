import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import AuditForm from './AuditForm';

const ContactModal = (props) => (
    <Modal
        isOpen={!!props.isModalOpen}
        onRequestClose={props.closeModal}
        closeTimeoutMS={200}
        className="contact_modal"
        appElement={document.getElementById('app')}
    >
        {props.isModalOpen && (
            <section>
                <div className="close_modal">
                    <span className="close_modal_span" onClick={props.closeModal}>&times;</span>
                </div>
                <div className="contact_modal_header">
                    <h3>Let us take a look at your site</h3>
                </div>
                <div className="contact_modal_content">
                    <AuditForm />
                </div>
            </section>
        )}
    </Modal>
);

ContactModal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.any.isRequired,
};

export default ContactModal;
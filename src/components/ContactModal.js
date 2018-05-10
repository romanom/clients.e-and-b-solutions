import React from 'react';
import Modal from 'react-modal';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-free-solid';
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
                    <FontAwesomeIcon icon={faTimes} size='5x' className="favicon" onClick={props.closeModal} />
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

export default ContactModal;
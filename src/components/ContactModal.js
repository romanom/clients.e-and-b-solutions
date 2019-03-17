import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

Modal.setAppElement('body');

const ContactModal = (props) => (
  <Modal
    isOpen={!!props.isModalOpen}
    onRequestClose={props.closeModal}
    closeTimeoutMS={200}
  >
    {props.isModalOpen && (
      <section className="contact_modal">
        <div className="contact_modal__header">
          <div className="contact_modal__close" onClick={props.closeModal}>&times;</div>
        </div>
        <div className="contact_modal__title">
          <h3>Let us take a look at your site</h3>
        </div>
        <div className="contact_modal__content">
          {props.children}
        </div>
      </section>
    )}
  </Modal>
);

ContactModal.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.any.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
};

export default ContactModal;

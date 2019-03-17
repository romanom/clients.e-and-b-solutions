import React from 'react';
import ReactModal from "react-modal";
import PropTypes from 'prop-types';

const Modal = ({
  children,
  isOpen,
  onClose,
}) => {
  ReactModal.setAppElement('#root');

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      closeTimeoutMS={200}
      className="modal"
      overlayClassName="modal__overlay"
    >
      {children}
    </ReactModal>
  );
}

export default Modal;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

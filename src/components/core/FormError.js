import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FormError = ({ error }) => (
  <div className="form_error">
    <FontAwesomeIcon icon="exclamation-circle" size="lg" color="red" />
    &nbsp;&nbsp;{error}
  </div>
);

FormError.propTypes = {
  error: PropTypes.string
};

export default FormError;

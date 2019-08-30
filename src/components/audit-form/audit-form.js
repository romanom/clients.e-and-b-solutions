import React from "react";
import { sendEmail, isEmailValid } from "../../utils/email";
import FormError from "../../atoms/form-error";

import "./audit-form.scss";

class AuditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonText: "Send It",
      email: "",
      emailSent: false,
      emailError: false,
      error: {},
      isSendButtonDisabled: true,
      message: "",
      website: ""
    };
  }

  handleSubmitAuditForm = () => {
    this.setState({ buttonText: "Sending", isSendButtonDisabled: true });

    const { email, message, website } = this.state;

    const data = {
      website,
      message,
      emailAddress: email
    };
    const done = () => this.setState({ emailSent: true });
    const fail = () => this.setState({ emailError: true });

    sendEmail(data, done, fail);
  };

  handleInput = e => {
    const { name: inputName, value: inputValue } = e.target;

    return this.setState(prevState => ({
      ...prevState,
      [inputName]: inputValue
    }));
  };

  handleEmailValidation = e => {
    const { value: inputValue } = e.target;

    if (!isEmailValid(inputValue)) {
      return this.setState(
        prevState => ({
          ...prevState,
          error: {
            ...prevState.error,
            email: "Please enter a valid email address"
          }
        }),
        this.validateRequiredFields()
      );
    }

    return this.setState(
      prevState => ({
        ...prevState,
        error: { ...prevState.error, email: undefined }
      }),
      this.validateRequiredFields()
    );
  };

  handleWebsiteValidation = () => {
    if (!this.state.website) {
      return this.setState(
        prevState => ({
          ...prevState,
          error: { ...prevState.error, website: "Please enter a website URL" }
        }),
        this.validateRequiredFields()
      );
    }

    return this.setState(
      prevState => ({
        ...prevState,
        error: { ...prevState.error, website: undefined }
      }),
      this.validateRequiredFields()
    );
  };

  validateRequiredFields = () => {
    const { email, error, website } = this.state;
    const { email: emailError, website: webSiteError } = error;

    if (email && website && !emailError && !webSiteError) {
      return this.setState({ isSendButtonDisabled: false });
    }

    return this.setState({ isSendButtonDisabled: true });
  };

  render() {
    const {
      email,
      emailSent,
      emailError,
      error,
      isSendButtonDisabled,
      message,
      website
    } = this.state;

    return (
      <div className="audit-form">
        {!emailSent && !emailError && (
          <div className="audit-form__form">
            <div className="audit-form__input">
              {error.website && <FormError error={error.website} />}
              <input
                name="website"
                onBlur={this.handleWebsiteValidation}
                onChange={this.handleInput}
                placeholder="Website URL (Required)"
                type="text"
                value={website}
              />
            </div>
            <div className="audit-form__input">
              {error.email && <FormError error={error.email} />}
              <input
                name="email"
                onBlur={this.handleEmailValidation}
                onChange={this.handleInput}
                placeholder="Email (Required)"
                type="text"
                value={email}
              />
            </div>
            <textarea
              className="audit-form__input"
              name="message"
              onChange={this.handleInput}
              placeholder="What's on your mind?"
              rows="4"
              value={message}
            />
            <button
              className="audit-form__button"
              disabled={isSendButtonDisabled}
              onClick={this.handleSubmitAuditForm}
            >
              {this.state.buttonText}
            </button>
          </div>
        )}
        {emailSent && (
          <div className="audit-form__email">
            <p>
              Thank you for reaching out! We are excited to get back in touch
              with you.
            </p>
          </div>
        )}
        {emailError && (
          <div className="audit-form__email">
            <p>
              Something went wrong unfortunately. Please try reloading the page.
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default AuditForm;

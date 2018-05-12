import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/fontawesome-free-solid'
import { sendEmail, isEmailValid } from '../tools/email';
import { handleEvent } from '../tools/analytics';
import { analyticsCategories, analyticsActions, analyticsLabels } from '../tools/constants';

export default class AuditForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.handleAddInput = this.handleAddInput.bind(this);

        this.handleContactInfo = this.handleContactInfo.bind(this);
        this.handleError = this.handleError.bind(this);

        this.handleEmailValidation = this.handleEmailValidation.bind(this);
        this.handleRequiredValidation = this.handleRequiredValidation.bind(this);

        this.handleSubmitAuditForm = this.handleSubmitAuditForm.bind(this);
        this.handleResetForm = this.handleResetForm.bind(this);
        this.state = {
            buttonText: "Send It",
            emailSent: false,
            emailError: false,
            contactInfo: {},
            error: {}
        }
    }

    handleSubmitAuditForm(e) {
        e.preventDefault();
        document.getElementById('audit_form_button').setAttribute("disabled", true);
        this.setState(() => ({
            buttonText: "Sending"
        }));

        const contactInputs = this.state.contactInfo;
        const data = {
            website: contactInputs.website,
            emailAddress: contactInputs.email,
            message: contactInputs.message
        }
        const analyticsEvent = {
            category: analyticsCategories.contact,
            action: analyticsActions.sendEmail,
            label: analyticsLabels.auditForm
        }
        const done = () => {
            handleEvent(analyticsEvent);
            this.handleResetForm();
            return this.setState(() => ({
                emailSent: true
            }));
        };
        const fail = () => {
            return this.setState(() => ({
                emailError: true
            }));
        }
        sendEmail(data, done, fail);
    };

    handleInput(e) {
        const inputName = e.target.name;
        const inputValue = e.target.value.trim();

        switch (inputName) {
            case 'email':
                this.handleEmailValidation(inputValue);
                return;
            case 'website':
                this.handleRequiredValidation(inputName, inputValue);
                return;
            default:
                this.handleAddInput(inputName, inputValue);
                return;
        }
    }

    handleContactInfo(inputName, inputValue = undefined) {
        //Remove from Contact Info
        if (!inputValue) {
            const { [inputName]: undefined, ...contactInfo } = this.state.contactInfo;
            return this.setState(() => ({
                contactInfo
            }));
        }
        //Add to Contact Info
        return this.setState(() => ({
            contactInfo: { ...this.state.contactInfo, [inputName]: inputValue }
        }));
    }

    handleError(inputName, inputValue = undefined) {
        //Remove from Error
        if (!inputValue) {
            const { [inputName]: undefined, ...error } = this.state.error;
            return this.setState(() => ({
                error
            }));
        }
        //Add to Error
        return this.setState(() => ({
            error: { ...this.state.error, [inputName]: inputValue }
        }));
    }

    handleEmailValidation(inputValue) {
        if (!isEmailValid(inputValue)) {
            this.handleError('email', 'Please enter a valid email address');
            this.handleContactInfo('email');
            return;
        }
        this.handleError('email');
        this.handleContactInfo('email', inputValue);
    }

    handleRequiredValidation(inputName, inputValue) {
        if (!inputValue) {
            this.handleError(inputName, 'This is a required field');
            this.handleContactInfo(inputName);
            return;
        }
        this.handleError(inputName);
        this.handleContactInfo(inputName, inputValue);
    }

    handleAddInput(inputName, inputValue) {
        if (!inputValue) {
            this.handleContactInfo(inputName);
            return;
        }
        this.handleContactInfo(inputName, inputValue);
    }

    handleResetForm() {
        const contactInputs = document.forms[0].getElementsByClassName('contact_form_input');
        for (let input of contactInputs) {
            input.value = '';
        };
        return this.setState(() => ({ contactInfo: {}, error: {} }));
    }

    render() {
        return (
            <div id="audit_form">
                {
                    (!this.state.emailSent && !this.state.emailError)
                    &&
                    <form className="contact_form" onSubmit={this.handleSubmitAuditForm}>
                        {
                            this.state.error.website
                            &&
                            <p className="contact_form_error">
                                <FontAwesomeIcon icon={faExclamationCircle} size='lg' color='red' />
                                {this.state.error.website}
                            </p>
                        }
                        <input
                            id="contact_website"
                            type="text"
                            name="website"
                            className='contact_form_input'
                            placeholder="Website URL (Required)"
                            onBlur={this.handleInput}
                        />
                        {
                            this.state.error.email
                            &&
                            <p className="contact_form_error">
                                <FontAwesomeIcon icon={faExclamationCircle} size='lg' color='red' />
                                {this.state.error.email}
                            </p>
                        }
                        <input
                            id="contact_email"
                            type="text"
                            name="email"
                            className='contact_form_input'
                            placeholder="Email (Required)"
                            onBlur={this.handleInput}
                        />
                        <textarea
                            name="message"
                            rows="4"
                            className='contact_form_input'
                            placeholder="What's on your mind?"
                            onBlur={this.handleInput}
                        ></textarea>
                        <div>
                            <button
                                id="audit_form_button"
                                className="contact_form_button"
                                disabled={Object.keys(this.state.error).length > 0
                                    || !this.state.contactInfo.website
                                    || !this.state.contactInfo.email}
                            >
                                {this.state.buttonText}
                            </button>
                        </div>
                    </form>
                }
                {
                    this.state.emailSent &&
                    <div className="contact_form_email">
                        <p>Thank you for reaching out! We are excited to get back in touch with you.</p>
                    </div>
                }
                {
                    this.state.emailError &&
                    <div className="contact_form_email">
                        <p>Something went wrong unfortunately. Please try reloading the page.</p>
                    </div>
                }
            </div>
        );
    };
}
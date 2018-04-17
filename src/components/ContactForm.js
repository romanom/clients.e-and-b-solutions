import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faExclamation, faExclamationCircle, faSpinner } from '@fortawesome/fontawesome-free-solid'
import { sendEmail, isEmailValid } from '../tools/email';


export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.handleAddInput = this.handleAddInput.bind(this);

        this.handleAddToContactInfo = this.handleAddToContactInfo.bind(this);
        this.handleDeleteFromContactInfo = this.handleDeleteFromContactInfo.bind(this);
        this.handleAddToError = this.handleAddToError.bind(this);
        this.handleDeleteFromError = this.handleDeleteFromError.bind(this);

        this.handleEmailValidation = this.handleEmailValidation.bind(this);
        this.handleRequiredValidation = this.handleRequiredValidation.bind(this);

        this.handleSubmitContactForm = this.handleSubmitContactForm.bind(this);
        this.handleResetForm = this.handleResetForm.bind(this);
        this.state = {
            emailSent: false,
            emailError: false,
            contactInfo: {},
            error: {}
        }
    }

    handleSubmitContactForm(e) {
        e.preventDefault();

        const contactInputs = this.state.contactInfo;
        const data = {
            name: contactInputs.name,
            email: contactInputs.email,
            phone: contactInputs.phone,
            comment: contactInputs.message
        }
        const done = () => {
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
            case 'name':
                this.handleRequiredValidation(inputName, inputValue);
                return;
            default:
                this.handleAddInput(inputName, inputValue);
                return;
        }
    }

    handleAddToContactInfo(inputName, inputValue) {
        let newContactInfo = Object.assign({}, this.state.contactInfo);
        newContactInfo[inputName] = inputValue;
        return this.setState(() => ({
            contactInfo: newContactInfo
        }));
    }

    handleDeleteFromContactInfo(inputName) {
        let newContactInfo = Object.assign({}, this.state.contactInfo);
        delete newContactInfo[inputName];
        return this.setState(() => ({
            contactInfo: newContactInfo
        }));
    }

    handleAddToError(inputName, inputValue) {
        let newError = Object.assign({}, this.state.error);
        newError[inputName] = inputValue;
        return this.setState(() => ({
            error: newError
        }));
    }

    handleDeleteFromError(inputName) {
        let newError = Object.assign({}, this.state.error);
        delete newError[inputName];
        return this.setState(() => ({
            error: newError
        }));
    }

    handleEmailValidation(inputValue) {
        if (!isEmailValid(inputValue)) {
            this.handleAddToError('email', 'Please enter a valid email address');
            this.handleDeleteFromContactInfo('email');
            return;
        }
        this.handleDeleteFromError('email');
        this.handleAddToContactInfo('email', inputValue);
    }

    handleRequiredValidation(inputName, inputValue) {
        if (!inputValue) {
            this.handleAddToError(inputName, 'This is a required field');
            this.handleDeleteFromContactInfo(inputName);
            return;
        }
        this.handleDeleteFromError(inputName);
        this.handleAddToContactInfo(inputName, inputValue);
    }

    handleAddInput(inputName, inputValue) {
        if (!inputValue) {
            this.handleDeleteFromContactInfo(inputName);
            return;
        }
        this.handleAddToContactInfo(inputName, inputValue);
    }

    handleResetForm(e) {
        const contactInputs = document.forms[0].getElementsByClassName('contact_form_input');
        for (let input of contactInputs) {
            input.value = '';
        };
        return this.setState(() => ({ contactInfo: {}, error: {} }));
    }

    render() {
        return (
            <div id="contact_form">
                {
                    (!this.state.emailSent && !this.state.emailError)
                    &&
                    <form onSubmit={this.handleSubmitContactForm}>
                        {
                            this.state.error.name
                            &&
                            <p className="error">
                                <FontAwesomeIcon icon={faExclamationCircle} size='lg' color='red' />
                                {this.state.error.name}
                            </p>
                        }
                        <input
                            id="contact_name"
                            type="text"
                            name="name"
                            className='contact_form_input'
                            placeholder="Name (Required)"
                            onBlur={this.handleInput}
                        />
                        {
                            this.state.error.email
                            &&
                            <p className="error">
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
                        <input
                            type="number"
                            name="phone"
                            className='contact_form_input'
                            placeholder="Phone (Digits only, no dashes, etc.)"
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
                                disabled={Object.keys(this.state.error).length > 0
                                    || !this.state.contactInfo.name
                                    || !this.state.contactInfo.email}
                            >
                                Send It
                        </button>
                        </div>
                    </form>
                }
                {
                    this.state.emailSent &&
                    <div className="email">
                        <p>Thank you for reaching out! We are excited to get back in touch with you.</p>
                    </div>
                }
                {
                    this.state.emailError &&
                    <div className="email">
                        <p>Something went wrong unfortunately. Please try reloading the page.</p>
                    </div>
                }
            </div>
        );
    };
}
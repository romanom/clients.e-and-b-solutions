import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faExclamation, faExclamationCircle, faSpinner } from '@fortawesome/fontawesome-free-solid'
import { sendEmail } from '../tools/email';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.handleEmptyValidation = this.handleEmptyValidation.bind(this);
        this.handleAddInput = this.handleAddInput.bind(this);
        this.handleSubmitContactForm = this.handleSubmitContactForm.bind(this);
        this.handleResetForm = this.handleResetForm.bind(this);
        this.state = {
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
        const done = () => { this.handleResetForm() };
        const fail = () => (console.log('fail'));
        sendEmail(data, done, fail);
    };

    handleEmptyValidation(e) {
        const inputName = e.target.name;
        const inputValue = e.target.value.trim();

        if (!inputValue) {
            let newError = Object.assign({ [inputName]: 'This field is required' }, this.state.error);
            return this.setState(() => ({
                error: newError
            }));
        }
        let newError = Object.assign({}, this.state.error);
        delete newError[inputName];
        return this.setState((prevState) => ({
            contactInfo: Object.assign({ [inputName]: inputValue }, prevState.contactInfo),
            error: newError
        }));
    }

    handleAddInput(e) {
        const inputName = e.target.name;
        const inputValue = e.target.value.trim();

        if (!inputValue) {
            let newContactInfo = Object.assign({}, this.state.contactInfo);
            delete newContactInfo[inputName];
            return this.setState(() => ({
                contactInfo: newContactInfo
            }));
        }

        if (this.state.contactInfo[inputName]) {
            let newContactInfo = Object.assign({}, this.state.contactInfo);
            newContactInfo[inputName] = inputValue;
            return this.setState(() => ({
                contactInfo: newContactInfo
            }));
        }

        return this.setState((prevState) => ({
            contactInfo: Object.assign({ [inputName]: inputValue }, prevState.contactInfo)
        }));
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
                        onBlur={this.handleEmptyValidation}
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
                        type="email"
                        name="email"
                        className='contact_form_input'
                        placeholder="Email (Required)"
                        onBlur={this.handleEmptyValidation}
                    />
                    <input
                        type="phone"
                        name="phone"
                        className='contact_form_input'
                        placeholder="Phone (Digits only, no dashes, etc.)"
                        onBlur={this.handleAddInput}
                    />
                    <textarea
                        name="message"
                        rows="4"
                        className='contact_form_input'
                        placeholder="What's on your mind?"
                        onBlur={this.handleAddInput}
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
            </div>
        );
    };
}
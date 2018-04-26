import React from 'react';
import { handlePageView } from '../tools/analytics';
import ContactForm from './ContactForm';


export default class ContactPage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        handlePageView();
    }

    render() {
        return (
            <div id='contact_page'>
                <header>
                    <h3>Contact Us</h3>
                    <p>
                        We promise that your email won't disappear into the nether.
                </p>
                    <p>
                        At E&B Solutions, we provide the exceptional service we'd want to experience ourselves!
            </p>
                </header>
                <div className='contact_form'>
                    <ContactForm />
                </div>
            </div>
        );
    }
}
import React from 'react';
import ContactForm from './ContactForm';

const ContactPage = () => (
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

export default ContactPage;
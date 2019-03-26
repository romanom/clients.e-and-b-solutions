import React from 'react';
import { handlePageView } from '../tools/analytics';
import ContactForm from './ContactForm';

export default class ContactPage extends React.Component {
  componentDidMount() {
    handlePageView();
  }

  render() {
    return (
      <div className='contact_page'>
        <div className='contact_page__content'>
          <div className="contact_page__header">
            <div className="contact_page__header-title">Contact Us</div>
            <div className="contact_page__header-content">
              We promise that your email won&apos;t disappear into the nether.
          </div>
            <div className="contact_page__header-content">
              We are more than happy to answer any questions you may have.
          </div>
          </div>
          <ContactForm />
        </div>
      </div>
    );
  }
}

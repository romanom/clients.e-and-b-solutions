import React from "react";
import ContactForm from "./ContactForm";
import "./contact-container.scss";

class ContactContainer extends React.Component {
  render() {
    return (
      <div className="contact_container">
        <div className="contact_container__title">Contact Us</div>
        <ContactForm />
      </div>
    );
  }
}

export default ContactContainer;

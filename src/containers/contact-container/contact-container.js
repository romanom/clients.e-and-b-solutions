import React from "react";
import ContactForm from "../../components/contact-form";

import "./contact-container.scss";

const ContactContainer = () => (
  <div className="contact-container">
    <div className="contact-container__form">
      <div className="contact-container__title">Have some questions?</div>
      <ContactForm />
    </div>
  </div>
);

export default ContactContainer;

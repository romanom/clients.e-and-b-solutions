import React from "react";
import { handlePageView } from "../tools/analytics";
import ContactContainer from "../containers/contact-container";

export default class ContactPage extends React.Component {
  componentDidMount() {
    handlePageView();
  }

  render() {
    return (
      <div className="contact_page">
        <ContactContainer />
      </div>
    );
  }
}

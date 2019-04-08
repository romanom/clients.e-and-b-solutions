import React from "react";
import { handlePageView } from "../tools/analytics";
import FAQContainer from "../containers/faq-container";

export default class FAQPage extends React.Component {
  componentDidMount() {
    handlePageView();
  }

  render() {
    return (
      <main className="faq_page">
        <FAQContainer />
      </main>
    );
  }
}

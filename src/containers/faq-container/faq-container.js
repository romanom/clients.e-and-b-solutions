import React from "react";
import FAQWidget from "../../components/faq-widget";
import faqs from "../../content/faqs";
import "./faq-container.scss";

export default class FAQContainer extends React.Component {
  render() {
    return (
      <div className="faq_container">
        {faqs.map((faq, index) => (
          <FAQWidget key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    );
  }
}

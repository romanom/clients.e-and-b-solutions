import React from 'react';
import { handlePageView } from '../tools/analytics';
import FAQWidget from './FAQWidget';
import faqs from '../content/faqs';

export default class FAQPage extends React.Component {
  componentDidMount() {
    handlePageView();
  }

  render() {
    return (
      <div id="faq_page">
        <div className="faq_content">
          {faqs.map((faq, index) => (
            <FAQWidget
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    );
  }
}

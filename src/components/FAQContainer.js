import React from 'react';
import FAQWidget from './FAQWidget';
import faqs from '../content/faqs';

export default class FAQContainer extends React.Component {
  render() {
    return (
      <div className="faqs">
        {faqs.map((faq, index) => (
          <FAQWidget
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    );
  }
}

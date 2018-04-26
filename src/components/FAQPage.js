import React from 'react';
import FAQWidget from './FAQWidget';
import faqs from '../tools/faqs';

const FAQPage = () => (
    <div id="faq_page">
        <div className="faq_content">
            {faqs.map((faq, index) => {
                return (
                    <FAQWidget
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                    />
                );
            })}
        </div>
    </div>
);

export default FAQPage;
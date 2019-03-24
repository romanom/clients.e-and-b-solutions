import React from 'react';
import { handlePageView } from '../tools/analytics';
import FAQContainer from './FAQContainer';

export default class FAQPage extends React.Component {
  componentDidMount() {
    handlePageView();
  }

  render() {
    return (
      <div className="faq_page">
        <FAQContainer />
      </div>
    );
  }
}

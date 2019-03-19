import React from 'react';
import { Link } from 'react-router-dom';
import { handlePageView, handleEvent } from '../tools/analytics';
import { openModalEvent, closeModalEvent, navigateByButtonEvent } from '../tools/analytics_events';
import AuditForm from './AuditForm';
import Modal from './core/Modal';

export default class PricingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    }
  }

  componentDidMount() {
    handlePageView();
  }

  handleAnalyticsEvent = () => {
    handleEvent(navigateByButtonEvent)
  }

  toggleModal = () => {
    if (this.state.isModalOpen) {
      handleEvent(closeModalEvent);
    }
    else {
      handleEvent(openModalEvent);
    }

    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen
    }));
  }

  render() {
    return (
      <section id="pricing">
        <div className="pricing_row">
          <div className="pricing_package">
            <div className="price_header">
              <h3>Just Curious</h3>
              <h5>Get To Know Us</h5>
              <p>
                We will inspect your current site to check for weak spots and show how we can help at no cost to you.
              </p>
            </div>
            <div className="price_cost">
              <h2>Free</h2>
            </div>
            <div className="price_content">
              <p>List of site issues</p>
              <p>Report of all findings</p>
              <p>Recommendations for site fixes</p>
            </div>
            <div className="contact">
              <button className="button" onClick={this.toggleModal}>
                Get Your Free Report
              </button>
            </div>
          </div>
          <div className="pricing_package">
            <div className="price_header">
              <h3>Simple Yet Effective</h3>
              <h5>Website</h5>
              <p>
                We will build you a custom website from scratch and host it ($100 value) for the first year for free.
              </p>
            </div>
            <div className="price_cost">
              <h2>$250</h2>
            </div>
            <div className="price_content">
              <p>Up to 5 pages</p>
              <p>Support and maintenance costs included</p>
              <p>Hosting for the first year <strong>FREE</strong></p>
            </div>
            <div className="contact">
              <Link to='/contact' onClick={this.handleAnalyticsEvent} className='link'>Start Your New Site</Link>
            </div>
          </div>
          <div className="pricing_package">
            <div className="price_header">
              <h3>All The Things</h3>
              <h5>E-Commerce Site</h5>
              <p>
                Let us create a place where your customers can browse and purchase from you all in one location.
              </p>
            </div>
            <div className="price_cost">
              <h2>$500</h2>
            </div>
            <div className="price_content">
              <p>Shopping Cart and Payments</p>
              <p>Support and maintenance costs included</p>
              <p>Hosting for the first year <strong>FREE</strong></p>
            </div>
            <div className="contact">
              <Link to='/contact' onClick={this.handleAnalyticsEvent} className='link'>Build your app today</Link>
            </div>
          </div>
        </div>
        <Modal
          isOpen={this.state.isModalOpen}
          onClose={this.toggleModal}
          title="Let us take a look at your site"
        >
          <AuditForm />
        </Modal>
      </section>
    );
  }
}

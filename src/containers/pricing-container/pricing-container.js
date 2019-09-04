import React from "react";
import Link from "next/link";
import AuditForm from "../../components/audit-form";
import Modal from "../../components/modal";

import "./pricing-container.scss";

class PricingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
  }

  toggleModal = () =>
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));

  render() {
    return (
      <div className="pricing-container">
        <div className="pricing-container__package">
          <div className="pricing-container__package-header">
            <div className="pricing-container__package-header-title">
              Get To Know Us
            </div>
            <div className="pricing-container__package-header-content">
              We will review your current site to show how we can help at no
              cost to you.
            </div>
          </div>
          <div className="pricing-container__package-cost">Free</div>
          <div className="pricing-container__package-content">
            <p>List of site concerns</p>
            <p>Report of all findings</p>
            <p>Recommendations for site fixes</p>
          </div>
          <button
            className="pricing-container__package-button"
            onClick={this.toggleModal}
          >
            Get Your Free Report
          </button>
        </div>
        <div className="pricing-container__package">
          <div className="pricing-container__package-header">
            <div className="pricing-container__package-header-title">
              Simple Yet Effective
            </div>
            <div className="pricing-container__package-header-content">
              We will build you a custom website and host it ($100 value) for
              the first year for free.
            </div>
          </div>
          <div className="pricing-container__package-cost">$250</div>
          <div className="pricing-container__package-content">
            <p>Up to 5 pages</p>
            <p>Support and maintenance costs</p>
            <p>
              Hosting for the first year <strong>FREE</strong>
            </p>
          </div>
          <Link href="/contact">
            <a className="pricing-container__package-link link">
              Start Your New Site
            </a>
          </Link>
        </div>
        <div className="pricing-container__package">
          <div className="pricing-container__package-header">
            <div className="pricing-container__package-header-title">
              E-Commerce Site
            </div>
            <div className="pricing-container__package-header-content">
              Let us create a place where your customers can browse and purchase
              from you with ease.
            </div>
          </div>
          <div className="pricing-container__package-cost">$500</div>
          <div className="pricing-container__package-content">
            <p>Shopping Cart and Payments</p>
            <p>Support and maintenance costs</p>
            <p>
              Hosting for the first year <strong>FREE</strong>
            </p>
          </div>
          <Link href="/contact">
            <a className="pricing-container__package-link link">
              Build your app today
            </a>
          </Link>
        </div>
        <Modal
          appElement="#__next"
          isOpen={this.state.isModalOpen}
          onClose={this.toggleModal}
          title="Let us take a look at your site"
        >
          <AuditForm />
        </Modal>
      </div>
    );
  }
}

export default PricingContainer;

import React from "react";
import { Link } from "react-router-dom";
import AuditForm from "../../components/audit-form";
import Modal from "../../components/modal";
import "./pricing-container.scss";

export default class PricingContainer extends React.Component {
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
      <main className="pricing_container">
        <div className="pricing_container__package">
          <div className="pricing_container__package-header">
            <div className="pricing_container__package-header-title">
              Just Curious
            </div>
            <div className="pricing_container__package-header-subtitle">
              Get To Know Us
            </div>
            <div className="pricing_container__package-header-content">
              We will inspect your current site to check for weak spots and show
              how we can help at no cost to you.
            </div>
          </div>
          <div className="pricing_container__package-cost">Free</div>
          <div className="pricing_container__package-content">
            <p>List of site issues</p>
            <p>Report of all findings</p>
            <p>Recommendations for site fixes</p>
          </div>
          <button
            className="pricing_container__package-button"
            onClick={this.toggleModal}
          >
            Get Your Free Report
          </button>
        </div>
        <div className="pricing_container__package">
          <div className="pricing_container__package-header">
            <div className="pricing_container__package-header-title">
              Simple Yet Effective
            </div>
            <div className="pricing_container__package-header-subtitle">
              Website
            </div>
            <div className="pricing_container__package-header-content">
              We will build you a custom website from scratch and host it ($100
              value) for the first year for free.
            </div>
          </div>
          <div className="pricing_container__package-cost">$250</div>
          <div className="pricing_container__package-content">
            <p>Up to 5 pages</p>
            <p>Support and maintenance costs included</p>
            <p>
              Hosting for the first year <strong>FREE</strong>
            </p>
          </div>
          <Link
            className="nav_link pricing_container__package-link"
            to="/contact"
          >
            Start Your New Site
          </Link>
        </div>
        <div className="pricing_container__package">
          <div className="pricing_container__package-header">
            <div className="pricing_container__package-header-title">
              All The Things
            </div>
            <div className="pricing_container__package-header-subtitle">
              E-Commerce Site
            </div>
            <div className="pricing_container__package-header-content">
              Let us create a place where your customers can browse and purchase
              from you all in one location.
            </div>
          </div>
          <div className="pricing_container__package-cost">$500</div>
          <div className="pricing_container__package-content">
            <p>Shopping Cart and Payments</p>
            <p>Support and maintenance costs included</p>
            <p>
              Hosting for the first year <strong>FREE</strong>
            </p>
          </div>
          <Link
            className="nav_link pricing_container__package-link"
            to="/contact"
          >
            Build your app today
          </Link>
        </div>
        <Modal
          isOpen={this.state.isModalOpen}
          onClose={this.toggleModal}
          title="Let us take a look at your site"
        >
          <AuditForm />
        </Modal>
      </main>
    );
  }
}

import React from "react";
import { handlePageView } from "../tools/analytics";
import PricingContainer from "../containers/pricing-container";

export default class PricingPage extends React.Component {
  componentDidMount() {
    handlePageView();
  }

  render() {
    return (
      <main className="pricing_page">
        <PricingContainer />
      </main>
    );
  }
}

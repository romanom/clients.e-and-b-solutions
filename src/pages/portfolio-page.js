import React from "react";
import { handlePageView } from "../tools/analytics";
import PortfolioContainer from "../containers/portfolio-container";

export default class PortfolioPage extends React.Component {
  componentDidMount() {
    handlePageView();
  }

  render() {
    return (
      <main className="portfolio_page">
        <PortfolioContainer />
      </main>
    );
  }
}

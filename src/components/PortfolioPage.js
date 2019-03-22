import React from 'react';
import { handlePageView } from '../tools/analytics';
import PortfolioContainer from './PortfolioContainer'

export default class PortfolioPage extends React.Component {
  componentDidMount() {
    handlePageView();
  }

  render() {
    return (
      <div className="portfolio_page">
        <PortfolioContainer />
      </div>
    );
  }
}

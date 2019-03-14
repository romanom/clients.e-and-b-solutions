import React from 'react';
import { handlePageView } from '../tools/analytics';
import PortfolioSection from './PortfolioSection'


export default class PortfolioPage extends React.Component {
    componentDidMount() {
        handlePageView();
    }

    render() {
        return (
            <div id="portfolio_page">
                <PortfolioSection />
            </div>
        );
    }
}

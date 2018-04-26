import React from 'react';
import { handlePageView } from '../tools/analytics';
import PortfolioSection from './PortfolioSection'


export default class PortfolioPage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        handlePageView();
    }

    render() {
        return (
            <div>
                <PortfolioSection />
            </div>
        );
    }
}
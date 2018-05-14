import React from 'react';
import { Link } from 'react-router-dom';
import { handlePageView, handleEvent } from '../tools/analytics';
import { navigateByButtonEvent } from '../tools/analytics_events';
import ServicesSection from './ServicesSection';
import TeamSection from './TeamSection';

export default class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.handleAnalyticsEvent = this.handleAnalyticsEvent.bind(this);
    }

    handleAnalyticsEvent() {
        handleEvent(navigateByButtonEvent)
    }

    componentDidMount() {
        handlePageView();
    }

    render() {
        return (
            <div id="landing_page">
                <header>
                    <div className="intro_text">It's nice to meet you</div>
                    <div>
                        <Link to='/pricing' onClick={this.handleAnalyticsEvent} className='link'>Let's Get Started</Link>
                    </div>
                </header>
                <ServicesSection />
                <TeamSection />
            </div>
        );
    }
}
import React from 'react';
import { Link } from 'react-router-dom';
import { handlePageView, handleEvent } from '../tools/analytics';
import { analyticsCategories, analyticsActions } from '../tools/constants';
import ServicesSection from './ServicesSection';
import TeamSection from './TeamSection';


const goToPricingEvent = {
    category: analyticsCategories.navigate,
    action: analyticsActions.navigateByButton
}

export default class LandingPage extends React.Component {

    constructor(props) {
        super(props);
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
                        <Link to='/pricing' onClick={() => handleEvent(goToPricingEvent)} className='link'>Let's Get Started</Link>
                    </div>
                </header>
                <ServicesSection />
                <TeamSection />
            </div>
        );
    }
}
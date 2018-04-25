import React from 'react';
import { Link } from 'react-router-dom';
import ServicesSection from './ServicesSection';
import TeamSection from './TeamSection';

const LandingPage = () => (
    <div id="landing_page">
        <header>
            <div className="intro_text">It's nice to meet you</div>
            <div>
                <Link to='/pricing' className='link'>Let's Get Started</Link>
            </div>
        </header>
        <ServicesSection />
        <TeamSection />
    </div>
);

export default LandingPage;
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
    <div id="landing_page">
        <header>
            <div className="intro_text">It's nice to meet you</div>
            <div>
                <Link to='/contact' className='link'>Let's Get Started</Link>
            </div>
        </header>
    </div>
);

export default LandingPage;
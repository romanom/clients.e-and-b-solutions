import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faLinkedin, faLinkedinIn } from '@fortawesome/fontawesome-free-brands'

const linkedInUrl = "https://www.linkedin.com/in/aaron-sisler-capm-24686b58";

const TeamSection = (props) => (
    <section id="team">
        <header>
            <h2>Our Amazing Team</h2>
            <h3>Hiring Local</h3>
        </header>
        <div className="team_row">
            <div className="team_member">
                <img src='/images/team_member1.jpg' alt="Aaron Sisler" />
                <h4>Aaron Sisler</h4>
                <p>Lead Developer</p>
                <a href={linkedInUrl}>
                    <FontAwesomeIcon className="icon" icon={faLinkedinIn} size='4x' />
                </a>
            </div>
        </div>
    </section>
);

export default TeamSection;
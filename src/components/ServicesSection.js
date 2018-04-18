import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faTabletAlt, faCogs, faBriefcase } from '@fortawesome/fontawesome-free-solid'

const ServicesSection = (props) => (
    <section id="services">
        <header>
            <h2>How Can We Help</h2>
            <h3>Making Technology Easy</h3>
        </header>
        <div className="services_row">
            <div className="service">
                <FontAwesomeIcon className="icon" icon={faTabletAlt} size='8x' />
                <h4>Web Apps and Websites</h4>
                <p>
                    Creating easy to use web apps or sites, designed to work on any screen, that give the user a wonderful
                    experience.
                </p>
            </div>
            <div className="service">
                <FontAwesomeIcon className="icon" icon={faCogs} size='8x' />
                <h4>Hosting and Support</h4>
                <p>
                    Providing cloud hosting and support for your site so you can worry about other things.
                </p>
            </div>
            <div className="service">
                <FontAwesomeIcon className="icon" icon={faBriefcase} size='8x' />
                <h4>Technical Consulting</h4>
                <p>
                    Let's see what we can do together to make things easier for you.
                </p>
            </div>
        </div>
    </section>
);

export default ServicesSection;
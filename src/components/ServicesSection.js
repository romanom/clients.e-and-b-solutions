import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faTablet, faCogs, faBriefcase } from '@fortawesome/fontawesome-free-solid'

const ServicesSection = (props) => (
    <section id="services">
        <div>
            <h2>Services</h2>
            <h3>Making Technology Easy</h3>
        </div>
        <div className="services_row">
            <div>
                <FontAwesomeIcon icon={faTablet} size='lg' />
                <h4>Web App and Website Design</h4>
                <p>
                    Creating responsive and intuitive web tools, designed to work on any screen, that give the user a wonderful
                    experience
                </p>
            </div>
            <div>
                <FontAwesomeIcon icon={faCogs} size='lg' />
                <h4>Hosting and Support</h4>
                <p>
                    Providing cloud infrastructure and maintenance services for technology that may be needed for web app
                    and website deployment
                </p>
            </div>
            <div>
                <FontAwesomeIcon icon={faBriefcase} size='lg' />
                <h4>Technical Consulting</h4>
                <p>
                    Discovering what business needs are not being met by currently implemented technology and creating a
                    strategy that will allow for controlled growth
                </p>
            </div>
        </div>
    </section>
);

export default ServicesSection;
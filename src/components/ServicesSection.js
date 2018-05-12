import React from 'react';
const service_1 = { imageLocation: '/images/services_1.png', alt: 'Something' };
const service_2 = { imageLocation: '/images/services_2.png', alt: 'Something' };
const service_3 = { imageLocation: '/images/services_3.png', alt: 'Something' };

const ServicesSection = (props) => (
    <section id="services">
        <header>
            <h2>How Can We Help</h2>
            <h3>Making Technology Easy</h3>
        </header>
        <div className="services_row">
            <div className="service">
                <img className="service_image" src={service_1.imageLocation} alt={service_1.alt} />
                <h4>Web Apps and Websites</h4>
                <p>
                    Creating easy to use web apps or sites, designed to work on any screen, that give the user a wonderful
                    experience.
                </p>
            </div>
            <div className="service">
                <img className="service_image" src={service_2.imageLocation} alt={service_2.alt} />
                <h4>Hosting and Support</h4>
                <p>
                    Providing cloud hosting and support for your site so you can worry about other things.
                </p>
            </div>
            <div className="service">
                <img className="service_image" src={service_3.imageLocation} alt={service_3.alt} />
                <h4>Technical Consulting</h4>
                <p>
                    Let's see what we can do together to make things easier for you.
                </p>
            </div>
        </div>
    </section>
);

export default ServicesSection;
import React from 'react';
const service_1 = { imageLocation: '/images/services_1.png', alt: 'Desktop Computer' };
const service_2 = { imageLocation: '/images/services_2.png', alt: 'Cloud hosting' };
const service_3 = { imageLocation: '/images/services_3.png', alt: 'Consulting' };

const ServicesContainer = () => (
    <section className="services">
        <div className="services__header">
            <div className="services__header-title">How Can We Help</div>
            <div className="services__header-title-secondary">Making Technology Easy</div>
        </div>
        <div className="services__content">
            <div className="service">
                <img
                    className="service__image"
                    src={service_1.imageLocation}
                    alt={service_1.alt}
                />
                <div className="service__title">Web Apps and Websites</div>
                <div className="service__content">
                    Creating easy to use web apps or sites, designed to work on any screen, that give the user a wonderful
                    experience.
                </div>
            </div>
            <div className="service">
                <img
                    className="service__image"
                    src={service_2.imageLocation}
                    alt={service_2.alt}
                />
                <div className="service__title">Hosting and Support</div>
                <div className="service__content">
                    Providing cloud hosting and support for your site so you can worry about other things.
                </div>
            </div>
            <div className="service">
                <img
                    className="service__image"
                    src={service_3.imageLocation}
                    alt={service_3.alt}
                />
                <div className="service__title">Technical Consulting</div>
                <div className="service__content">
                    Let&apos;s see what we can do together to make things easier for you.
                </div>
            </div>
        </div>
    </section>
);

export default ServicesContainer;

import React from 'react';

const PricingPage = (props) => (
    <section id="pricing">
        <header>
            <h2>What's it gonna cost me?</h2>
        </header>
        <div className="pricing_row">
            <div className="pricing_package">
                <div className="price_header">
                    <h3>Just Curious</h3>
                    <h5>Get To Know Us</h5>
                    <p>
                        We will give your current site a once over to check for weak spots and show how we might can help
                    </p>
                </div>
                <div className="price_cost">
                    <h2>Free</h2>
                </div>
                <div className="price_content">
                    <p>List of site issues</p>
                    <p>Report of all findings</p>
                    <p>Recommendations for site fixes</p>
                </div>
            </div>
            <div className="pricing_package most_popular">
                <div className="popular">
                    Most Popular
                </div>
                <div className="price_header">
                    <h3>Simple Yet Effective</h3>
                    <h5>Website</h5>
                    <p>
                        We will build you a custom website from scratch and host it ($100 value) for the first year for FREE!
                    </p>
                </div>
                <div className="price_cost">
                    <h2>$150</h2>
                </div>
                <div className="price_content">
                    <p>Up to 5 pages</p>
                    <p>Support and maintenance costs included!</p>
                    <p>Hosting for the first year <strong>FREE</strong>!</p>
                </div>
            </div>
            <div className="pricing_package">
                <div className="price_header">
                    <h3>All The Things</h3>
                    <h5>E-Commerce Site</h5>
                    <p>
                        Let us create a place where your customers can browse and purchase your wares all in one place!
                    </p>
                </div>
                <div className="price_cost">
                    <h2>$250</h2>
                </div>
                <div className="price_content">
                    <p>Shopping Cart</p>
                    <p>Payment Capabilities</p>
                    <p>Support and maintenance costs included!</p>
                    <p>Hosting for the first year <strong>FREE</strong>!</p>
                </div>
            </div>
        </div>
    </section>
);

export default PricingPage;
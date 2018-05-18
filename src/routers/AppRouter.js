import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LandingPage from '../components/LandingPage'
import ContactPage from '../components/ContactPage'
import AboutPage from '../components/AboutPage'
import PricingPage from '../components/PricingPage'
import PortfolioPage from '../components/PortfolioPage'
import PrivacyPolicyPage from '../components/PrivacyPolicyPage'
import FAQPage from '../components/FAQPage'
import NotFoundPage from '../components/NotFoundPage'

const state = {
    companyName: 'E&B Solutions'
}

const AppRouter = () => (
    <BrowserRouter>
        <ScrollToTop>
            <Navbar companyName={state.companyName} />
            <Switch>
                <Route path="/" component={LandingPage} exact={true} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/pricing" component={PricingPage} />
                <Route path="/portfolio" component={PortfolioPage} />
                <Route path="/privacy" component={PrivacyPolicyPage} />
                <Route path="/faq" component={FAQPage} />
                <Route component={NotFoundPage} />
            </Switch>
            <Footer />
        </ScrollToTop>
    </BrowserRouter>
);

export default AppRouter;

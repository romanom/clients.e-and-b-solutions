import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from '../components/core/ScrollToTop';

import Navbar from '../components/core/Navbar'
import Footer from '../components/core/Footer'
import LandingPage from '../components/LandingPage'
import ContactPage from '../components/ContactPage'
import PricingPage from '../components/PricingPage'
import PortfolioPage from '../components/PortfolioPage'
import PrivacyPolicyPage from '../components/core/PrivacyPolicyPage'
import FAQPage from '../components/FAQPage'
import NotFoundPage from '../components/core/NotFoundPage'

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

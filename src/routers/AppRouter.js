import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../tools/history";
import ScrollToTop from "../components/core/ScrollToTop";

import Navbar from "../components/core/Navbar";
import Footer from "../components/core/Footer";
import PageContainer from "../components/core/PageContainer";
import LandingPage from "../components/LandingPage";
import ContactPage from "../components/ContactPage";
import PricingPage from "../components/PricingPage";
import ProjectPage from "../components/ProjectPage";
import PortfolioPage from "../components/PortfolioPage";
import PrivacyPolicyPage from "../components/core/PrivacyPolicyPage";
import FAQPage from "../components/FAQPage";
import NotFoundPage from "../components/core/NotFoundPage";

const state = {
  companyName: "E&B Solutions"
};

// const pageContainer = component => <PageContainer component={component} />;

const AppRouter = () => (
  <Router history={history}>
    <ScrollToTop>
      <Navbar companyName={state.companyName} />
      <Switch>
        <Route path="/" component={PageContainer(LandingPage)} exact={true} />
        <Route
          path="/contact"
          component={PageContainer(ContactPage)}
          exact={true}
        />
        <Route
          path="/pricing"
          component={PageContainer(PricingPage)}
          exact={true}
        />
        <Route
          path="/portfolio"
          component={PageContainer(PortfolioPage)}
          exact={true}
        />
        <Route
          path="/project/:projectId"
          component={ProjectPage}
          exact={true}
        />
        <Route
          path="/privacy"
          component={PageContainer(PrivacyPolicyPage)}
          exact={true}
        />
        <Route path="/faq" component={PageContainer(FAQPage)} exact={true} />
        <Route
          path="/not_found"
          component={PageContainer(NotFoundPage)}
          exact={true}
        />
        <Route component={PageContainer(NotFoundPage)} />
      </Switch>
      <Footer />
    </ScrollToTop>
  </Router>
);

export default AppRouter;

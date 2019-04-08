import React from "react";
import ScrollToTop from "../scroll-to-top-container";
import Navbar from "../../components/navbar";
import AppRouter from "../../routers/app-router";
import Footer from "../../components/footer";
import "./app-container.scss";

const state = {
  // companyName: "E&B Solutions"
  companyName: "Taco Mans"
};

class AppContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ScrollToTop>
          <Navbar companyName={state.companyName} />
          <AppRouter />
          <Footer />
        </ScrollToTop>
      </React.Fragment>
    );
  }
}

export default AppContainer;

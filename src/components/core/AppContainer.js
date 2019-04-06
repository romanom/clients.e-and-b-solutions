import React from "react";
import ScrollToTop from "./ScrollToTop";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AppRouter from "../../routers/AppRouter";

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
          <main>
            <AppRouter />
          </main>
          <Footer />
        </ScrollToTop>
      </React.Fragment>
    );
  }
}

export default AppContainer;

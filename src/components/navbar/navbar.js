import React from "react";
import Link from "../../atoms/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import "./navbar.scss";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false
    };
  }

  openSideMenu = () => this.setState({ isNavOpen: true });

  closeSideMenu = () => this.setState({ isNavOpen: false });

  render() {
    const isNavOpenClass = this.state.isNavOpen ? "navbar__links--open" : "";
    return (
      <nav className="navbar">
        <div className="navbar__brand">
          {/* <Link
            className="navbar__brand-link"
            href="/"
            children="E&amp;B Solutions"
          /> */}
          <Link className="navbar__brand-link" href="/" children="Taco Stand" />
        </div>
        <div className="navbar__toggle">
          {!this.state.isNavOpen && (
            <FontAwesomeIcon
              icon={faBars}
              size="2x"
              className="favicon"
              onClick={this.openSideMenu}
            />
          )}
          {this.state.isNavOpen && (
            <FontAwesomeIcon
              icon={faTimes}
              size="2x"
              className="favicon"
              onClick={this.closeSideMenu}
            />
          )}
        </div>
        <div className={`navbar__links ${isNavOpenClass}`}>
          <Link
            className="navbar__link"
            href="/"
            onClick={this.closeSideMenu}
            children="Home"
          />
          <Link
            className="navbar__link"
            href="/pricing"
            onClick={this.closeSideMenu}
            children="Pricing"
          />
          <Link
            className="navbar__link"
            href="/portfolio"
            onClick={this.closeSideMenu}
            children="Portfolio"
          />
          <Link
            className="navbar__link"
            href="/faq"
            onClick={this.closeSideMenu}
            children="FAQ"
          />
          <Link
            className="navbar__link"
            href="/contact"
            onClick={this.closeSideMenu}
            children="Contact"
          />
        </div>
      </nav>
    );
  }
}

export default Navbar;

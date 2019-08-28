import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
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
    const isNavOpenClass = this.state.isNavOpen ? "navbar__links-open" : "";
    return (
      <nav className="navbar">
        <div className="navbar__brand">
          <Link href="/">E&amp;B Solutions</Link>
        </div>
        <div className="navbar__toggle">
          {!this.state.isNavOpen && (
            <FontAwesomeIcon
              icon={faBars}
              size="3x"
              className="favicon"
              onClick={this.openSideMenu}
            />
          )}
          {this.state.isNavOpen && (
            <FontAwesomeIcon
              icon={faTimes}
              size="3x"
              className="favicon"
              onClick={this.closeSideMenu}
            />
          )}
        </div>
        <div className={`navbar__links ${isNavOpenClass}`}>
          <Link href="/" className="navbar_link" onClick={this.closeSideMenu}>
            Home
          </Link>
          <Link
            href="/pricing"
            className="navbar_link"
            onClick={this.closeSideMenu}
          >
            Pricing
          </Link>
          <Link
            href="/portfolio"
            className="navbar_link"
            onClick={this.closeSideMenu}
          >
            Portfolio
          </Link>
          <Link
            href="/faq"
            className="navbar_link"
            onClick={this.closeSideMenu}
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="navbar_link"
            onClick={this.closeSideMenu}
          >
            Contact
          </Link>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  companyName: PropTypes.string.isRequired
};

export default Navbar;

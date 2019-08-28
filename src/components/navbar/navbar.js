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
          {/* <Link href="/">E&amp;B Solutions</Link> */}
          <Link href="/">
            <a>Taco Stand</a>
          </Link>
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
          <Link href="/">
            <a className="navbar_link" onClick={this.closeSideMenu}>
              Home
            </a>
          </Link>
          <Link href="/pricing">
            <a className="navbar_link" onClick={this.closeSideMenu}>
              Pricing
            </a>
          </Link>
          <Link href="/portfolio">
            <a className="navbar_link" onClick={this.closeSideMenu}>
              Portfolio
            </a>
          </Link>
          <Link href="/faq">
            <a className="navbar_link" onClick={this.closeSideMenu}>
              FAQ
            </a>
          </Link>
          <Link href="/contact">
            <a className="navbar_link" onClick={this.closeSideMenu}>
              Contact
            </a>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;

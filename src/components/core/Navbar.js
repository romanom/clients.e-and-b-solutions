import React from "react";
import { Link } from "react-router-dom";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/fontawesome-free-solid";
import PropTypes from "prop-types";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: true
    };
  }

  openSideMenu = () => this.setState({ isNavOpen: true });

  closeSideMenu = () => this.setState({ isNavOpen: false });

  render() {
    const isNavOpenClass = this.state.isNavOpen ? "-open" : "";
    return (
      <div className="nav_menu">
        <div className="nav_menu__top">
          <div className="nav_menu__top-brand">
            <Link to="/">{this.props.companyName}</Link>
          </div>
          <div className="nav_menu__top-toggle">
            {!this.state.isNavOpen && (
              <FontAwesomeIcon
                icon={faBars}
                size="3x"
                className="favicon"
                onClick={this.openSideMenu}
              />
            )}
          </div>
          <div className="nav_menu__top-links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className="nav_menu_contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={`nav_menu__side nav_menu__side${isNavOpenClass}`}>
          <FontAwesomeIcon
            icon={faTimes}
            size="3x"
            className="favicon"
            onClick={this.closeSideMenu}
          />
          <Link
            to="/"
            className="nav_menu__side-link"
            onClick={this.closeSideMenu}
          >
            Home
          </Link>
          <Link
            to="/pricing"
            className="nav_menu__side-link"
            onClick={this.closeSideMenu}
          >
            Pricing
          </Link>
          <Link
            to="/portfolio"
            className="nav_menu__side-link"
            onClick={this.closeSideMenu}
          >
            Portfolio
          </Link>
          <Link
            to="/faq"
            className="nav_menu__side-link"
            onClick={this.closeSideMenu}
          >
            FAQ
          </Link>
          <Link
            to="/contact"
            className="nav_menu__side-link-contact nav_menu_contact"
            onClick={this.closeSideMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  companyName: PropTypes.string.isRequired
};

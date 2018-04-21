import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/fontawesome-free-solid'

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.openSideMenu = this.openSideMenu.bind(this);
        this.closeSideMenu = this.closeSideMenu.bind(this);
        this.state = {
            isNavOpen: false,
            companyName: "Taco Taco",
            // companyName: "E&B Solutions",
        }
    }

    openSideMenu() {
        document.body.classList.add('body_open');
        document.getElementById('nav_side_menu').classList.add('nav_side_menu_open');
        this.setState(() => ({
            isNavOpen: true
        }));
    }

    closeSideMenu() {
        document.body.classList.remove('body_open');
        document.getElementById('nav_side_menu').classList.remove('nav_side_menu_open');
        this.setState(() => ({
            isNavOpen: false
        }));
    }

    render() {
        return (
            <nav>
                <div id="nav_side_menu">
                    <Link to="/" className="nav_side_menu_link" onClick={this.closeSideMenu}>Home</Link>
                    <Link to="/about" className="nav_side_menu_link" onClick={this.closeSideMenu}>About</Link>
                    <Link to="/contact" className="nav_side_menu_link nav_menu_contact" onClick={this.closeSideMenu}>Contact</Link>
                </div>
                <div id="mobile_nav_toggles">
                    <div id="brand">
                        <Link to="/">{this.state.companyName}</Link>
                    </div>
                    <div id="nav_mobile_toggle">
                        {!this.state.isNavOpen && <FontAwesomeIcon icon={faBars} size='3x' className="favicon" onClick={this.openSideMenu} />}
                        {this.state.isNavOpen && <FontAwesomeIcon icon={faTimes} size='3x' className="favicon" onClick={this.closeSideMenu} />}
                    </div>
                </div>
                <div id="desktop_menu">
                    <div id="brand">
                        <Link to="/">{this.state.companyName}</Link>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="nav_menu_contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => (
    <footer>
        <p>Copyright &copy; Taco Taco {new Date().getFullYear()}</p>
        <p><Link to="/privacy">Privacy Policy</Link></p>
    </footer>
);

export default Footer;
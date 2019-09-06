import React from "react";
import Link from "../../atoms/link";

import "./footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer__copyright">
      Copyright &copy; {new Date().getFullYear()}
    </div>
    <div className="footer__links">
      <Link
        children="Privacy Policy"
        className="footer__link"
        href="/privacy-policy"
      />
    </div>
  </footer>
);

export default Footer;

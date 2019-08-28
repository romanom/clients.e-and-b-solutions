import React from "react";
import Link from "next/link";

import "./footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer__copyright">
      Copyright &copy; {new Date().getFullYear()}
    </div>
    <div className="footer__links">
      <Link href="/privacy-policy">
        <a className="footer__link">Privacy Policy</a>
      </Link>
    </div>
  </footer>
);

export default Footer;

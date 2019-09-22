import React from "react";
import Link from "../../atoms/link";

import "./landing.scss";

const Landing = () => (
  <div className="landing">
    <div className="landing__splash">
      <div className="landing__splash-text">It&apos;s nice to meet you</div>
      <div className="landing__splash-link">
        <Link href="/pricing" children="Let's Get Started" />
      </div>
    </div>
  </div>
);

export default Landing;

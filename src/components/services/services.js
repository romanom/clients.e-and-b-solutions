import React from "react";
import Service from "../service";
import services from "../../content/services";

import "./services.scss";

const Services = () => (
  <div className="services">
    <div className="services__header">
      <div className="services__header-title">How Can We Help</div>
    </div>
    <div className="services__content">
      {services.map((service, index) => (
        <Service key={index} {...service} />
      ))}
    </div>
  </div>
);

export default Services;

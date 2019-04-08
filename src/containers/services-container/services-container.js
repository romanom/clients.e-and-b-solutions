import React from "react";
import services from "../../content/services";

const ServicesContainer = () => (
  <div className="services">
    <div className="services__header">
      <div className="services__header-title">How Can We Help</div>
      <div className="services__header-title-secondary">
        Making Technology Easy
      </div>
    </div>
    <div className="services__content">
      {services.map((service, index) => (
        <div key={index} className="service">
          <img
            className="service__image"
            src={service.image.imageLocation}
            alt={service.image.alt}
          />
          <div className="service__title">{service.title}.</div>
          <div className="service__content">{service.content}</div>
        </div>
      ))}
    </div>
  </div>
);

export default ServicesContainer;

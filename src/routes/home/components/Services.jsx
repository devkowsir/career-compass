import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "../../../components/Rating";
import { ServicesSection } from "../config";

const Services = () => {
  return (
    <section id="services" className="container text-base-content/75" data-aos="fade-right" data-aos-once>
      <h2 className="text-4xl font-bold text-center mb-2">{ServicesSection.heading}</h2>
      <p className="text-lg text-center mb-12 text-base-content/75">{ServicesSection.subHeading}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {ServicesSection.cards.map((service) => (
          <div
            key={service.slug}
            className="card card-compact shadow-xl transition-transform transform hover:scale-105"
          >
            <figure className="relative">
              <img src={service.image} alt={service.serviceName} className="aspect-video object-cover" />
              <div className="badge badge-accent badge-lg absolute bottom-4 right-4">{service.category}</div>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service.serviceName}</h2>
              <p className="text-base">{service.description}</p>
              <p className="text-base-content">{service.duration}</p>
              <p className="text-base-content">Counselor: {service.counselor}</p>
              <div className="flex items-center">
                <Rating maxRating={5} achievedRating={service.rating} />
                <p className="text-primary text-center font-bold">${service.pricing}</p>
                <Link to={`/service/${service.slug}`} className="btn btn-primary">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

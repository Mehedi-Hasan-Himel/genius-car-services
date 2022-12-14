import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`services.json`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div id="services" className="container">
      <h1 className="mt-5">Our Services</h1>
      <section className="row">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </section>
    </div>
  );
};

export default Services;














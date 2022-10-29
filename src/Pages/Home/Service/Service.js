import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { name, img, price, description } = service;

  return (
    <div className="gx-5 gy-5 col-sm-12 col-md-6 col-lg-4">
      <div className="card ">
        <section className="">
          <img className="card-img-top" src={img} alt="" />
          <h2>This is service: {name}</h2>
          <p>Price: {price}</p>
          <p>
            <small>{description}</small>
          </p>
          <a href="#" className="btn btn-primary m-3">
            {" "}
            Book: {name}
          </a>
        </section>
      </div>
    </div>
  );
};

export default Service;

import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, img, price, description } = service;
  const navigate = useNavigate()
  const navigateToServiceDetail = (id) => {
    navigate(`/service/${id}`)
  };

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
          <Button
            onClick={() => navigateToServiceDetail(id)}
            className="btn btn-primary m-3"
          >
            Book: {name}
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Service;

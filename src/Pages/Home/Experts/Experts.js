import React from "react";
import expert1 from "../../../img/Experts/expert-1.jpeg";
import expert2 from "../../../img/Experts/expert-2.jpeg";
import expert3 from "../../../img/Experts/expert-3.jpeg";
import expert4 from "../../../img/Experts/expert-4.jpeg";
import expert5 from "../../../img/Experts/expert-5.jpeg";
import expert6 from "../../../img/Experts/expert-6.png";
import Expert from "../Expert/Expert";

const experts = [
  { id: 1, name: `Will Smith`, img: expert1 },
  { id: 2, name: `Chrish Hemsworth`, img: expert2 },
  { id: 3, name: `Robert Droweny Jr`, img: expert3 },
  { id: 4, name: `Scerlet Jonson`, img: expert4 },
  { id: 5, name: `Tom Holland`, img: expert5 },
  { id: 6, name: `Peater Parker`, img: expert6 },
];

const Experts = () => {
  return (
    <div className="container">
      <h2 className="text-primary mt-5">Our Experts</h2>
      <div className="row">
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;

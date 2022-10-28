import React from 'react';
import "./Service.css"

const Service = ({ service }) => {
   const { name, img, price, description } = service;

   return (
     <div className='service'>
       <section className='service-card'>
         <img src={img} alt="" />
         <h2>This is service: {name}</h2>
         <p>Price: {price}</p>
         <p>
           <small>{description}</small>
         </p>
         <button>Book: {name}</button>
       </section>
     </div>
   );
};

export default Service;
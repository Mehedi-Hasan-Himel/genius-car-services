import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../img/banner/banner1.jpeg'
import banner2 from '../../../img/banner/banner2.jpeg'
import banner3 from '../../../img/banner/banner3.jpeg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
   return (
     <Carousel activeIndex={index} onSelect={handleSelect}>
       <Carousel.Item>
         <img className="d-block w-100" src={banner1} alt="First slide" />
         <Carousel.Caption>
           <h3>First slide label</h3>
           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
         </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
         <img className="d-block w-100" src={banner2} alt="Second slide" />

         <Carousel.Caption>
           <h3>Second slide label</h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
         <img className="d-block w-100" src={banner3} alt="Third slide" />

         <Carousel.Caption>
           <h3>Third slide label</h3>
           <p>
             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
           </p>
         </Carousel.Caption>
       </Carousel.Item>
     </Carousel>
   );
};

export default Banner;
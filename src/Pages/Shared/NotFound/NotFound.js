import React from 'react';
import error from '../../../img/error.gif'
const NotFound = () => {
   return (
      <div>
         <h2 className='text-primary'>Mechanic is Sleeping or Page not found</h2>
         <img src={error} alt="" />
      </div>
   );
};

export default NotFound;
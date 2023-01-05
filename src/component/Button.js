import React from 'react';
import './Button.css'

const Button = ({value}) => {
     return (
          <div className='text-center'>
               <button class="custom-btn btn-3"><span>{value}</span></button>
          </div>
     );
};

export default Button;
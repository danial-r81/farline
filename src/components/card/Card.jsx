import React from 'react';

import './card.css';
const Card = ({ title, items }) => {
   console.log(title);
   console.log(items);
   return (
      <div class='card-container'>
         <div class='card'>
            <div class='card-info'>
               <div class='container'>
                  <h2>{title}</h2>
                  <div class='back'>
                     <ul className='card-items'>
                        {items.map((item) => (
                           <li className='card-item'>{item}</li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Card;

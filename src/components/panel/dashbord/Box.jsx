import React from 'react';

const Box = ({ icon, text, onClick }) => {
   return (
      <div className='box' onClick={onClick}>
         <div className='boxs'>
            <div>
               <div className='cardname'>{text}</div>
            </div>
            {icon}
         </div>
      </div>
   );
};

export default Box;

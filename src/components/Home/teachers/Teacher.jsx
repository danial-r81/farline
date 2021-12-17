import React from 'react';

export const Teacher = ({ teacher }) => {
  return (
    <div className='teacher'>
      <div className='image'>
        <img src='images/rasooli.png' alt='' />
      </div>
      <div className='name'>{teacher.name}</div>
      <div className='lesson'>{teacher.lesson}</div>
    </div>
  );
};

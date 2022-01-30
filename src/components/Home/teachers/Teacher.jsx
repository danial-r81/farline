import React from 'react';
import config from '../../../services/config.json';

export const Teacher = ({ teacher }) => {
  return (
    <div className='teacher'>
      <div className='image'>
        <img src={`${config.baseUrl}${teacher.picture}`} alt='' />
      </div>
      <div className='name'>{teacher.name}</div>
      <div className='lesson'>{teacher.text}</div>
    </div>
  );
};

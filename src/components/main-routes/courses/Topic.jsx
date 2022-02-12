import React from 'react';
import config from '../../../services/config.json';

export const Topic = ({ course }) => {
  console.log(course);
  return (
    <div className={`item`}>
      <div className='image'>
        <img src={`${config.baseUrl}${course.picture}`} alt={course.title} />
      </div>
      <div className='name'>{course.title}</div>
    </div>
  );
};

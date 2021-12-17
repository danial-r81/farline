import React from 'react';

export const Course = ({ course }) => {
  return (
    <div className={`course ${course.name}`}>
      <div className='course-image'>
        <img src={course.image} alt='' />
      </div>
      <div className='name'>{course.name_farsi}</div>
    </div>
  );
};

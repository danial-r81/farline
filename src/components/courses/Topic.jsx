import React from 'react';

export const Topic = ({ course }) => {
  return (
    <div className={`item ${course.name}`}>
      <div className='image'>
        <img src='images/Capture12.png' alt={course.name} />
      </div>
      <div className='name'>{course.name_farsi}</div>
    </div>
  );
};

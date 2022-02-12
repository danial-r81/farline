import React from 'react';

export const Course = ({ course }) => {
  console.log(course);
  return (
    <div className={`course ${course.title_en}`}>
      <div className='course-image'>
        <img src={course.picture} alt='' />
      </div>
      <div className='name'>{course.title_persion}</div>
    </div>
  );
};

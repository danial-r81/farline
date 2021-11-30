import React from 'react';
import './courses.css';
import { Topic } from './Topic';

export const Topics = () => {
  const courses = [
    {
      name: 'math',
      name_farsi: 'ریاضی',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'amar',
      name_farsi: 'آمار و احتمال',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'hendese',
      name_farsi: 'هندسه',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'fizics',
      name_farsi: 'فیزیک',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'shimi',
      name_farsi: 'شیمی',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'farsi',
      name_farsi: 'ادبیات فارسی',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'dini',
      name_farsi: 'دینی',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'zaban',
      name_farsi: 'زبان',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'arabi',
      name_farsi: 'عربی',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'zist',
      name_farsi: 'زیست',
      image: 'https://via.placeholder.com/150',
    },
  ];
  console.log(
    localStorage.getItem('firstName'),
    localStorage.getItem('lastName')
  );

  return (
    <section className='courses'>
      <div className='courses-container'>
        {courses.map((course) => (
          <Topic course={course} />
        ))}
      </div>
    </section>
  );
};

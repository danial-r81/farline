import React from 'react';
import './courses.css';
import { Topic } from './Topic';

export const Topics = () => {
  const courses = [
    {
      name: 'zaminshenasi',
      name_farsi: 'زمین شناسی',
      image: 'images/Slide1.png',
    },
    {
      name: 'math-tajrobi',
      name_farsi: 'ریاضیات تجربی',
      image: 'images/Slide2.png',
    },
    {
      name: 'amar',
      name_farsi: 'ریاضی آمار',
      image: 'images/Slide3.png',
    },
    {
      name: 'amar-gosaste',
      name_farsi: 'آمار و گسسته',
      image: 'images/Slide4.png',
    },
    {
      name: 'fizics',
      name_farsi: 'فیزیک',
      image: 'images/Slide5.png',
    },
    {
      name: 'hendese',
      name_farsi: 'هندسه',
      image: 'images/Slide6.png',
    },
    {
      name: 'jameshenasi',
      name_farsi: 'جامعه شناسی',
      image: 'images/Slide7.png',
    },
    {
      name: 'zaban',
      name_farsi: 'زبان انگلیسی',
      image: 'images/Slide8.png',
    },
    {
      name: 'zist',
      name_farsi: 'زیست شناسی',
      image: 'images/Slide9.png',
    },
    {
      name: 'dini',
      name_farsi: 'دین و زندگی',
      image: 'images/Slide10.png',
    },
    {
      name: 'falsafe',
      name_farsi: 'فلسفه و منطق',
      image: 'images/Slide11.png',
    },
    {
      name: 'hesaban',
      name_farsi: 'حسابان',
      image: 'images/Slide12.png',
    },
    {
      name: 'arabi',
      name_farsi: 'عربی',
      image: 'images/Slide13.png',
    },
    {
      name: 'history-geography',
      name_farsi: 'تاریخ و جغرافی',
      image: 'images/Slide14.png',
    },
    {
      name: 'ravan-eghtesad',
      name_farsi: 'روان شناسی و اقتصاد',
      image: 'images/Slide15.png',
    },
    {
      name: 'shimi',
      name_farsi: 'شیمی',
      image: 'images/Slide16.png',
    },
    {
      name: 'farsi',
      name_farsi: 'ادبیات فارسی',
      image: 'images/Slide17.png',
    },
    {
      name: 'olum-fonun',
      name_farsi: 'علوم و فنون',
      image: 'images/Slide18.png',
    },
  ];

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

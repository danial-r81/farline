import React, { Fragment } from 'react';
import { Teacher } from './Teacher';

import './teacher.css';
export const teacherGallery = () => {
  return (
    <Fragment>
      <div className='header-name'>
        <h1 className='title'>اساتید آموزشگاه فرتاک</h1>
      </div>
      <section className='main-gallery'>
        {[1, 2, 3].map((item, index) => (
          <Teacher key={index} />
        ))}
      </section>
    </Fragment>
  );
};
